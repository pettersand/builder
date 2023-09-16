from rest_framework import serializers
from builder.models import User
from django.core.exceptions import ValidationError


class Step1Serializer(serializers.Serializer):
    username = serializers.CharField(max_length=20, min_length=3)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate_username(self, value):
        # Add custom username validation logic here
        if len(value) < 3 or len(value) > 20:
            raise ValidationError("Username must be between 3 and 20 characters.")
        return value

    def validate_email(self, value):
        # Add custom email validation logic here
        if "example.com" in value:
            raise ValidationError("Email from example.com is not allowed.")
        return value

    def validate(self, data):
        password = data.get("password")
        confirm_password = data.get("confirm_password")

        # Check if passwords match
        if password != confirm_password:
            raise serializers.ValidationError(
                {"confirm_password": "Passwords must match."}
            )

        # Add custom password validation logic here
        if len(password) < 6:
            raise serializers.ValidationError(
                {"password": "Password must be at least 6 characters long."}
            )

        return data
