from django.db import models
from uuid import uuid4
from .user import User
from .exercise_variables import ExerciseVariables

class UserExerciseVariables(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='exercise_variables', on_delete=models.CASCADE)
    exercise_variable = models.ForeignKey(ExerciseVariables, related_name='user_variables', on_delete=models.CASCADE)
    custom_percentage = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.exercise_variable}"
