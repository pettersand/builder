# user_serializer.py

from rest_framework import serializers
from builder.models import User
from datetime import date


class Step1Serializer(serializers.Serializer):
    username = serializers.CharField(max_length=20, min_length=3)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=6)
    confirmPassword = serializers.CharField(write_only=True, min_length=6)

    def validate(self, data):
        print("step 1 validate called")
        password = data.get("password")
        confirmPassword = data.get("confirmPassword")

        if password != confirmPassword:
            print("s1 password confirmation failed")
            raise serializers.ValidationError(
                {"confirmPassword": "Passwords must match."}
            )
        print("Step 1 done")
        return data


class Step2Serializer(serializers.Serializer):
    firstName = serializers.CharField(max_length=30)
    lastName = serializers.CharField(max_length=30)
    dob = serializers.DateField()
    country = serializers.CharField(max_length=30)
    gender = serializers.CharField(required=False)
    bioSex = serializers.CharField(required=False)
    isTrainer = serializers.BooleanField(required=False)
    hasTrainer = serializers.BooleanField(required=False)
    terms = serializers.BooleanField()

    print("step 2 validation done.")

    def validate_terms(self, value):
        if not value:
            raise serializers.ValidationError("You must agree to the terms of service.")
        return value


class LoginSerializer(serializers.Serializer):
    print("Login Serializer Started")
    username = serializers.CharField(max_length=150, required=False)
    email = serializers.EmailField(max_length=254, required=False)
    password = serializers.CharField(write_only=True, min_length=6)

    def validate(self, data):
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if not username and not email:
            raise serializers.ValidationError(
                "Either username or email must be provided."
            )

        if not password:
            raise serializers.ValidationError(
                {"password": "Password must be provided."}
            )

        return data
