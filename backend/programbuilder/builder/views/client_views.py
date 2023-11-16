from rest_framework.generics import ListCreateAPIView
from builder.models import ClientGoals
from builder.serializers import ClientGoalsSerializer


class ClientGoalView(ListCreateAPIView):
    queryset = ClientGoals.objects.all()
    serializer_class = ClientGoalsSerializer

    def get_queryset(self):
        return ClientGoals.objects.filter(
            trainer_client__trainer=self.request.user.trainer_clients
        )
