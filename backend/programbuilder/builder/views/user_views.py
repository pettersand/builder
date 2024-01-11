# views/user_views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.http import JsonResponse
from builder.models import User, UserProfile, Role, UserRole
from builder.serializers import Step1Serializer, Step2Serializer, LoginSerializer


class CheckAuthStatus(APIView):
    def get(self, request):
        response_data = {"isAuthenticated": request.user.is_authenticated}
        if request.user.is_authenticated:
            user_roles = (
                UserRole.objects.filter(user=request.user)
                .select_related("role")
                .values_list("role__name", flat=True)
            )
            print("Roles", user_roles)
            response_data["roles"] = list(user_roles)

            response_data["userId"] = request.user.id
            print("Response Data", response_data)
        return JsonResponse(response_data)


class LogoutView(APIView):
    def post(self, request):
        print("Logout View Triggered")
        logout(request)
        return Response(
            {"message": "Logged out successfully"}, status=status.HTTP_200_OK
        )


class RegisterStep1View(APIView):
    def post(self, request):
        print("Step 1 Validation")
        serializer = Step1Serializer(data=request.data.get("step1", {}))
        if serializer.is_valid():
            username = serializer.validated_data.get("username")
            email = serializer.validated_data.get("email")

            if User.objects.filter(username=username).exists():
                return Response(
                    {"username": "A user with that username already exists"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            if User.objects.filter(email=email).exists():
                return Response(
                    {"email": "A user with that email already exists"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            return Response(
                {"message": "Data is valid, proceed to step 2"},
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegisterStep2View(APIView):
    def post(self, request):
        step1_data = request.data.get("step1")
        step2_data = request.data.get("step2")
        print("Step 2 Data Retrieved", step1_data, step2_data)

        step1_serializer = Step1Serializer(data=step1_data)
        step2_serializer = Step2Serializer(data=step2_data)
        print("Serializers called")

        if step1_serializer.is_valid() and step2_serializer.is_valid():
            # Create base user
            print("Starting user creation")
            user = User.objects.create_user(
                username=step1_serializer.validated_data["username"],
                email=step1_serializer.validated_data["email"],
                password=step1_serializer.validated_data["password"],
                first_name=step2_serializer.validated_data["firstName"],
                last_name=step2_serializer.validated_data["lastName"],
            )

            # Update step 2 registration items to profile table
            print("Starting User Profile creation")
            UserProfile.objects.create(
                user=user,
                date_of_birth=step2_serializer.validated_data["dob"],
                country=step2_serializer.validated_data["country"],
                gender=step2_serializer.validated_data["gender"],
                biological_sex=step2_serializer.validated_data["bioSex"],
            )

            # Checks for roles and assigns to role_id
            print("Checking roles")
            is_trainer = step2_serializer.validated_data["isTrainer"]
            has_trainer = step2_serializer.validated_data["hasTrainer"]

            print("Applying Roles")
            if is_trainer:
                role = get_object_or_404(Role, name="Trainer")
            elif has_trainer:
                role = get_object_or_404(Role, name="Client")
            else:
                role = get_object_or_404(Role, name="Solo")

            UserRole.objects.create(user=user, role=role)

            login(request, user)
            print("Done!")
            return Response(
                {"message": "Data is valid, registration complete"},
                status=status.HTTP_200_OK,
            )
        else:
            errors = {}
            print(errors)
            if not step1_serializer.is_valid():
                print("Step 1 Error", step1_serializer.errors)
                errors.update({"step1": step1_serializer.errors})
            if not step2_serializer.is_valid():
                print("Step 2 Error", step2_serializer.errors)
                errors.update({"step2": step2_serializer.errors})

            return Response(errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        print("Login View Started")
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get("username")
            email = serializer.validated_data.get("email")
            password = serializer.validated_data.get("password")

            # Try to authenticate the user
            if username:
                user = authenticate(username=username, password=password)
            else:
                user = User.objects.filter(email=email).first()
                if user:
                    user = authenticate(username=user.username, password=password)

            if user:
                login(request, user)
                user_roles = (
                    UserRole.objects.filter(user=user)
                    .select_related("role")
                    .values_list("role__name", flat=True)
                )
                roles = list(user_roles)
                return Response(
                    {"message": "Login successful", "roles": roles},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"message": "Invalid credentials"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
