from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import Step1Serializer


class RegisterStep1View(APIView):
    def post(self, request):
        serializer = Step1Serializer(data=request.data)
        if serializer.is_valid():
            # TODO Check existing user
            return Response({"message": "Data is valid"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
