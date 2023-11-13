from rest_framework import serializers
from builder.models import TrainerClient, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name"]


class TrainerSerializer(serializers.ModelSerializer):
    trainer = UserSerializer(read_only=True)
    client = UserSerializer(read_only=True)

    class Meta:
        model = TrainerClient
        fields = [
            "id",
            "trainer",
            "client",
            "status",
            "consent",
            "created_at",
            "updated_at",
        ]
