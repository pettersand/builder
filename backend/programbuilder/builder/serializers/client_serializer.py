from rest_framework import serializers
from builder.models import (
    ClientGoals,
    ClientInjuries,
    ClientPreferences,
    ClientNotes,
    ClientData,
)


class ClientGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientGoals
        fields = "__all__"


class ClientInjuriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientInjuries
        fields = "__all__"


class ClientPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientPreferences
        fields = "__all__"


class ClientNotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientNotes
        fields = "__all__"


class ClientDataSerializer(serializers.ModelSerializer):
    goals = ClientGoalsSerializer(many=True, read_only=True)
    injuries = ClientInjuriesSerializer(many=True, read_only=True)
    preferences = ClientPreferencesSerializer(many=True, read_only=True)
    notes = ClientNotesSerializer(many=True, read_only=True)

    class Meta:
        model = ClientData
        fields = ["goals", "injuries", "preferences", "notes"]
