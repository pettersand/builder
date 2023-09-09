from rest_framework import viewsets
from builder.models import User
from builder.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("date_joined")
    serializer_class = UserSerializer
