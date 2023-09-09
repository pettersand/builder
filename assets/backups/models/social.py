from django.db import models
from uuid import uuid4
from .user import User

class Social(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user1 = models.ForeignKey(User, related_name='user1_relations', on_delete=models.CASCADE)
    user2 = models.ForeignKey(User, related_name='user2_relations', on_delete=models.CASCADE)
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
        ('blocked', 'Blocked'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    RELATIONSHIP_CHOICES = [
        ('friend', 'Friend'),
        ('client', 'Client'),
        ('trainer', 'Trainer'),
    ]
    relationship_type = models.CharField(max_length=10, choices=RELATIONSHIP_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user1', 'user2')