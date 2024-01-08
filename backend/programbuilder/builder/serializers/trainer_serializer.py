from rest_framework import serializers
from builder.models import TrainerClient, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name"]


class TrainerSerializer(serializers.ModelSerializer):
    client_id = serializers.UUIDField(source='client.id', read_only=True)
    username = serializers.CharField(source='client.username', read_only=True)
    email = serializers.CharField(source='client.email', read_only=True)
    first_name = serializers.CharField(source='client.first_name', read_only=True)
    last_name = serializers.CharField(source='client.last_name', read_only=True)
    status = serializers.CharField()

    class Meta:
        model = TrainerClient
        fields = [
            "client_id",
            "username",
            "email",
            "first_name",
            "last_name",
            "status",
        ]
