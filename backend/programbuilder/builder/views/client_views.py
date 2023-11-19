from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from builder.models import (
    ClientGoals,
    ClientNotes,
    ClientData,
    ClientInjuries,
    ClientPreferences,
    TrainerClient,
)
from builder.serializers import (
    ClientGoalsSerializer,
    ClientDataSerializer,
    ClientNotesSerializer,
    ClientPreferencesSerializer,
    ClientInjuriesSerializer,
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

        # Fetch TrainerClient instance
        trainer_client_instance = TrainerClient.objects.filter(
            trainer=request.user, client__id=client_id
        ).first()

        if not trainer_client_instance:
            return Response({"message": "TrainerClient instance not found"}, status=404)

        # Fetching and serializing goals, injuries, preferences, and notes
        goals_data = ClientGoalsSerializer(
            ClientGoals.objects.filter(trainer_client=trainer_client_instance),
            many=True,
        ).data
        injuries_data = ClientInjuriesSerializer(
            ClientInjuries.objects.filter(trainer_client=trainer_client_instance),
            many=True,
        ).data
        preferences_data = ClientPreferencesSerializer(
            ClientPreferences.objects.filter(trainer_client=trainer_client_instance),
            many=True,
        ).data
        notes_data = ClientNotesSerializer(
            ClientNotes.objects.filter(trainer_client=trainer_client_instance),
            many=True,
        ).data

        # Constructing and returning the response
        response_data = {
            "goals": goals_data,
            "injuries": injuries_data,
            "preferences": preferences_data,
            "notes": notes_data,
        }

        return Response(response_data)
