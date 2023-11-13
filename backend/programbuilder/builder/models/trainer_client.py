from django.db import models
from uuid import uuid4
from django.conf import settings


class TrainerClient(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    trainer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="trainer_clients",
    )
    client = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="client_trainers",
    )
    status = models.CharField(max_length=20, default="inactive")
    consent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("trainer", "client")
