# goals_serializer.py
from rest_framework import serializers
from builder.models import SimpleGoal
from datetime import date


class NewGoalSerializer(serializers.Serializer):
    type = serializers.CharField(max_length=5)
    content = serializers.CharField(max_length=100)
    goal_date = serializers.DateField()
    private = serializers.BooleanField()

    def validate(self, data):
        print("New Goal Serializer Validate Called")
        goal_date = data.get("goal_date")
        if goal_date < date.today():
            raise serializers.ValidationError(
                {"goal_date": "Goal date must be in the future."}
            )
        return data
