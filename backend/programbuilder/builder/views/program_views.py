from rest_framework.views import APIView
from rest_framework.response import Response
from builder.models import Program
from rest_framework import status
from builder.serializers import ProgramSerializer


class CreateProgramView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ProgramSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
