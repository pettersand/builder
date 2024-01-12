# goal_views.py
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from builder.models import SimpleGoal
from builder.serializers import NewGoalSerializer, FetchGoalsSerializer, GoalSerializer
from rest_framework.permissions import IsAuthenticated


User = get_user_model()

class NewSimpleGoal(APIView):
    def post(self, request):
        serializer = NewGoalSerializer(data=request.data)
        if serializer.is_valid():
            created_for_id = serializer.validated_data.get("created_for")
            created_for_user = None
            if created_for_id:
                try:
                    created_for_user = User.objects.get(id=created_for_id)
                except User.DoesNotExist:
                    return Response(
                        {"error": "User not found"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
            if not created_for_user:
                created_for_user = request.user

            new_goal = SimpleGoal.objects.create(
                user_id=request.user,
                created_for=created_for_user,
                type=serializer.validated_data["type"],
                content=serializer.validated_data["content"],
                status="active",
                goal_date=serializer.validated_data["goal_date"],
                private=False,
            )
            return Response(
                GoalSerializer(new_goal).data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FetchGoals(APIView):
    def get(self, request):
        goals = SimpleGoal.objects.filter(user_id=request.user)
        serializer = FetchGoalsSerializer(goals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class DeleteGoal(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, goal_id):
        goal = get_object_or_404(SimpleGoal, id=goal_id, user_id=request.user)
        goal.delete()
        return Response({'id': goal_id}, status=status.HTTP_200_OK)