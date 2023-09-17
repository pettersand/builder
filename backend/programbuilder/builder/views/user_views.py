# views/user_views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from builder.models import User
from builder.serializers import Step1Serializer


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
