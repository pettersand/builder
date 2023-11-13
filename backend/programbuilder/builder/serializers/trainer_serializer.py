from rest_framework import serializers
from builder.models import TrainerClient, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name"]


class TrainerSerializer(serializers.ModelSerializer):
    client = UserSerializer(read_only=True)

    class Meta:
        model = TrainerClient
        fields = [
            "client",
            "status",
        ]
