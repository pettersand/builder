from rest_framework.views import APIView
from rest_framework.response import Response
from builder.models import TrainerClient
from builder.serializers import TrainerSerializer


class TrainerClientsView(APIView):
    def get(self, request):
        trainer_clients = TrainerClient.objects.filter(trainer=request.user)
        serializer = TrainerSerializer(trainer_clients, many=True)
        return Response(serializer.data)
