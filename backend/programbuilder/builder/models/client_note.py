# client_note.py
from django.db import models
from .trainer_client import TrainerClient


class ClientNote(models.Model):
    trainer_client = models.ForeignKey(
        TrainerClient, on_delete=models.CASCADE, related_name="notes"
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    related_program = models.ForeignKey(
        "Program", on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return f"Note for {self.trainer_client.client.username} by {self.trainer_client.trainer.username}"
