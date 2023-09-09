from django.db import models
from uuid import uuid4
from .user import User

class OneRM(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='one_rm', on_delete=models.CASCADE)
    squat = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    deadlift = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    bench_press = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    standing_row = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    chin_ups = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    military_press = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    hip_thrust = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    clean = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    snatch = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - OneRM"
