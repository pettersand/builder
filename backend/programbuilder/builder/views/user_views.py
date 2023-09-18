# views/user_views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from builder.models import User, UserProfile, Role, UserRole
from builder.serializers import Step1Serializer, Step2Serializer


class RegisterStep1View(APIView):
    def post(self, request):
        serializer = Step1Serializer(data=request.data)
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

        step1_serializer = Step1Serializer(data=step1_data)
        step2_serializer = Step2Serializer(data=step2_data)

        if step1_serializer.is_valid() and step2_serializer.is_valid():
            # Create base user
            user = User.objects.create_user(
                username=step1_serializer.validated_data["username"],
                email=step1_serializer.validated_data["email"],
                password=step1_serializer.validated_data["password"],
                first_name=step2_serializer.validated_data["firstName"],
                last_name=step2_serializer.validated_data["lastName"],
            )
            UserProfile.objects.create(
                user=user,
                date_of_birth=step2_serializer.validated_data["dob"],
                country=step2_serializer.validated_data["country"],
                gender=step2_serializer.validated_data["gender"],
                biological_sex=step2_serializer.validated_data["bioSex"],
            )
            return Response(
                {"message": "Data is valid, registration complete"},
                status=status.HTTP_200_OK,
            )
        else:
            errors = {}
            if not step1_serializer.is_valid():
                errors.update({"step1": step1_serializer.errors})
            if not step2_serializer.is_valid():
                errors.update({"step2": step2_serializer.errors})

            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
