# user_serializer.py

from rest_framework import serializers
from builder.models import User
from datetime import date


class Step1Serializer(serializers.Serializer):
    username = serializers.CharField(max_length=20, min_length=3)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=6)
    confirm_password = serializers.CharField(write_only=True, min_length=6)

    def validate(self, data):
        password = data.get("password")
        confirm_password = data.get("confirm_password")

        if password != confirm_password:
            raise serializers.ValidationError(
                {"confirm_password": "Passwords must match."}
            )

        return data


class Step2Serializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    dob = serializers.DateField()
    country = serializers.CharField(max_length=30)
    gender = serializers.CharField(required=False)
    bioSex = serializers.CharField(required=False)
    isTrainer = serializers.BooleanField(required=False)
    hasTrainer = serializers.BooleanField(required=False)
    terms = serializers.BooleanField()

    def validate_terms(self, value):
        if not value:
            raise serializers.ValidationError("You must agree to the terms of service.")
        return value
