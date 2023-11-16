from rest_framework import serializers
from builder.models import ClientGoals


class ClientGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientGoals
        fields = "__all__"
