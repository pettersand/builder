from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from builder.models import (
    ClientGoals,
    ClientNotes,
    ClientData,
    ClientInjuries,
    ClientPreferences,
    TrainerClient,
    SimpleGoal,
)
from builder.serializers import (
    ClientGoalsSerializer,
    ClientDataSerializer,
    ClientNotesSerializer,
    ClientPreferencesSerializer,
    ClientInjuriesSerializer,
    FetchClientGoalsSerializer,
)


class ClientGoalView(ListCreateAPIView):
    queryset = ClientGoals.objects.all()
    serializer_class = ClientGoalsSerializer

    def get_queryset(self):
        return ClientGoals.objects.filter(trainer_client__trainer=self.request.user)


class ClientNotesView(ListCreateAPIView):
    queryset = ClientNotes.objects.all()
    serializer_class = ClientNotesSerializer

    def get_queryset(self):
        return ClientNotes.objects.filter(trainer_client__trainer=self.request.user)


class ClientInjuriesView(ListCreateAPIView):
    queryset = ClientInjuries.objects.all()
    serializer_class = ClientInjuriesSerializer

    def get_queryset(self):
        return ClientInjuries.objects.filter(trainer_client__trainer=self.request.user)


class ClientPreferencesView(ListCreateAPIView):
    queryset = ClientPreferences.objects.all()
    serializer_class = ClientPreferencesSerializer

    def get_queryset(self):
        return ClientPreferences.objects.filter(
            trainer_client__trainer=self.request.user
        )


class ClientDataView(APIView):
    def get(self, request, *args, **kwargs):
        client_id = request.query_params.get("clientId")
        print("Received client_id:", client_id)

        if client_id == str(request.user.id):
            goals_data = SimpleGoal.objects.filter(created_for=request.user)
        else:
            trainer_client_instance = TrainerClient.objects.filter(
                trainer=request.user, client__id=client_id
            ).first()

            if not trainer_client_instance:
                return Response({"message": "TrainerClient instance not found"}, status=404)

        # Fetching and serializing goals, injuries, preferences, and notes
            goals_data = SimpleGoal.objects.filter(
                Q(created_for_id=client_id, user_id=request.user) |
                Q(created_for_id=client_id, private=False)
            )

        serialized_goals = FetchClientGoalsSerializer(goals_data, many=True).data
        print("Serialized goals:", serialized_goals)
        

        # Constructing and returning the response
        response_data = {
            "user_id": client_id,
            "goals": serialized_goals,
        }
        print("Response data:", response_data)

        return Response(response_data)

