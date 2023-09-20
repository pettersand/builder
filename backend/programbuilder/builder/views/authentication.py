from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse


@login_required
def check_auth_status(request):
    return JsonResponse({"isAuthenticated": True})


@login_required
@api_view(["POST"])
def logout_view(request):
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
