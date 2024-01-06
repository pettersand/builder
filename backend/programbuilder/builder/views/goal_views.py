# goal_views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from builder.models import SimpleGoal
from builder.serializers import NewGoalSerializer, FetchGoalsSerializer, GoalSerializer, DeleteGoalSerializer
from rest_framework.permissions import IsAuthenticated


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

    def delete(self, request, *args, **kwargs):
        serializer = DeleteGoalSerializer(data=request.data)
        if serializer.is_valid():
            goal_id = serializer.validated_data['id']
            goal = SimpleGoal.objects.filter(id=goal_id, user_id=request.user)
            if goal.exists():
                goal.delete()
                return Response({'id': goal_id}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Goal not found or not authorized to delete.'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)