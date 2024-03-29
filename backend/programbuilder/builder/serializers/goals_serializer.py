# goals_serializer.py
from rest_framework import serializers
from builder.models import SimpleGoal
from datetime import date


class NewGoalSerializer(serializers.ModelSerializer):
    created_for = serializers.UUIDField(required=False)

    class Meta:
        model = SimpleGoal
        fields = ["type", "content", "goal_date", "created_for"]

    def validate_goal_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("Goal date must be in the future.")
        return value


class FetchGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleGoal
        fields = ["id", "type", "content", "goal_date", "status"]

    
class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleGoal
        fields = ["id", "type", "content", "goal_date", "status"]

    def validate_goal_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("Goal date must be in the future.")
        return value
    