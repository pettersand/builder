from rest_framework.views import APIView
from rest_framework.response import Response
from builder.models import TrainerClient
from builder.serializers import TrainerSerializer


class TrainerClientsView(APIView):
    def get(self, request):
        # Filter to include only clients who have given consent
        trainer_clients = TrainerClient.objects.filter(
            trainer=request.user, consent=True
        )
        serializer = TrainerSerializer(trainer_clients, many=True)
        return Response(serializer.data)
