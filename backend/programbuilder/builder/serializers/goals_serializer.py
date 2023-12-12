# goals_serializer.py
from rest_framework import serializers
from builder.models import SimpleGoal
from datetime import date


class NewGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleGoal
        fields = ["type", "content", "goal_date", "private"]

    def validate_goal_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("Goal date must be in the future.")
        return value
