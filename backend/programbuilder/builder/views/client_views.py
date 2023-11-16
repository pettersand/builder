from rest_framework.generics import ListCreateAPIView
from builder.models import (
    ClientGoals,
    ClientNotes,
    ClientData,
    ClientInjuries,
    ClientPreferences,
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


class ClientDataView(ListCreateAPIView):
    queryset = ClientData.objects.all()
    serializer_class = ClientDataSerializer

    def get_queryset(self):
        return ClientData.objects.filter(trainer_client__trainer=self.request.user)
