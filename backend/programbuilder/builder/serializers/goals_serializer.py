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
    

class DeleteGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleGoal
        fields = ["id"]

    def validate_id(self, value):
        if not SimpleGoal.objects.filter(id=value).exists():
            raise serializers.ValidationError("Goal does not exist.")
        return value

    def delete(self):
        SimpleGoal.objects.filter(id=self.validated_data["id"]).delete()
        return True