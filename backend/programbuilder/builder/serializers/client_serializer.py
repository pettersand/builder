from rest_framework import serializers
from builder.models import (
    ClientGoals,
    ClientInjuries,
    ClientPreferences,
    ClientNotes,
    ClientData,
    SimpleGoal,
    UserProfile,
)


class NestedGoalSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    createdBy = serializers.UUIDField(source="user_id.id")
    type = serializers.CharField()
    goal = serializers.CharField(source="content")
    status = serializers.CharField()
    dueDate = serializers.DateField(source="goal_date")

class FetchClientGoalsSerializer(serializers.ModelSerializer):
    createdBy = serializers.UUIDField(source="user_id.id")
    goal = serializers.CharField(source="content")
    dueDate = serializers.DateField(source="goal_date")
    print(createdBy, goal, dueDate)

    class Meta:
        model = SimpleGoal
        fields = ["id", "createdBy", "type", "goal", "status", "dueDate"]

## TODO: Not yet implemented
class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"

""" 
! Cleanup on isle 3. Old code below, check for usage then delete.
 """

class ClientGoalsSerializer(serializers.ModelSerializer):
    print("ClientGoalsSerializer Started")

    class Meta:
        model = ClientGoals
        fields = "__all__"
        print("ClientGoalsSerializer Ended")


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
    print("ClientDataSerializer Started")
    goals = ClientGoalsSerializer(many=True, read_only=True)
    injuries = ClientInjuriesSerializer(many=True, read_only=True)
    preferences = ClientPreferencesSerializer(many=True, read_only=True)
    notes = ClientNotesSerializer(many=True, read_only=True)

    class Meta:
        model = ClientData
        fields = ["goals", "injuries", "preferences", "notes"]

