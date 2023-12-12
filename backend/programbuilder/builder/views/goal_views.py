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
            print("Validated")
            new_goal = SimpleGoal.objects.create(
                user_id=request.user,
                created_for=request.user,
                type=serializer.validated_data.get("type"),
                content=serializer.validated_data.get("content"),
                status="active",
                goal_date=serializer.validated_data.get("goal_date"),
                private="True"
            )
            return Response(
                {"message": "Goal created successfully"},
                status=status.HTTP_201_CREATED,
            )