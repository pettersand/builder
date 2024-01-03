# goal_views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from builder.models import SimpleGoal
from builder.serializers import NewGoalSerializer


class NewSimpleGoal(APIView):
    def post(self, request):
        serializer = NewGoalSerializer(data=request.data)
        if serializer.is_valid():
            new_goal = SimpleGoal.objects.create(
                user_id=request.user,
                created_for=request.user,
                type=serializer.validated_data["type"],
                content=serializer.validated_data["content"],
                status="active",
                goal_date=serializer.validated_data["goal_date"],
                private=serializer.validated_data["private"],
            )
            return Response(
                NewGoalSerializer(new_goal).data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FetchGoals(APIView):
    def get(self, request):
        goals = SimpleGoal.objects.filter(user_id=request.user)
        return Response(NewGoalSerializer(goals, many=True).data)