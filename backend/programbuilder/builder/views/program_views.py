from rest_framework.views import APIView
from rest_framework.response import Response
from builder.models import Program
from rest_framework import status
from builder.serializers import ProgramSerializer

""" TODO: Add activeClient as field for user """
class CreateProgramView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ProgramSerializer(data=request.data)
        if serializer.is_valid():
            program = serializer.save(creator=request.user, user=request.user)
            return Response(
                ProgramSerializer(program).data, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get program view

##TODO: Add active client as field for user, and check permissions/ownership
class UpdateProgramView(APIView):
    def put(self, request, *args, **kwargs):
        program = Program.objects.get(pk=kwargs["pk"])
        serializer = ProgramSerializer(program, data=request.data, partial=True)
        if serializer.is_valid():
            program = serializer.save()
            return Response(
                ProgramSerializer(program).data, status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Delete program view
    
