# client_note.py
from django.db import models
from django.conf import settings


class ClientNote(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="client_notes"
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    related_program = models.ForeignKey(
        "Program", on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return (
            f"Note for {self.user.username} on {self.created_at.strftime('%Y-%m-%d')}"
        )
