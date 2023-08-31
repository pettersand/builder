from django.db import models
from uuid import uuid4
from .user import User

class TrainerClient(models.Model):
    trainer = models.ForeignKey(User, related_name='trainer_clients', on_delete=models.CASCADE)
    client = models.ForeignKey(User, related_name='client_trainers', on_delete=models.CASCADE)
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='inactive')
    consent = models.BooleanField(default=False)
    communication_channel = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('trainer', 'client')

    def __str__(self):
        return f"{self.trainer.username} - {self.client.username}"