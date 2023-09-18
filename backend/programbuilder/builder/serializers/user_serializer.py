# user_serializer.py

from rest_framework import serializers
from builder.models import User


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
    # Your fields for step 2 go here. For example:
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    # Add more fields as needed

    def validate(self, data):
        # Your custom validation logic for step 2 goes here
        return data
