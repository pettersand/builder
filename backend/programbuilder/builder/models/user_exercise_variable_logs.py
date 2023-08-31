from django.db import models
from uuid import uuid4
from .user import User
from .exercise_variables import ExerciseVariables

class UserExerciseVariableLogs(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='exercise_variable_logs', on_delete=models.CASCADE)
    exercise_variable = models.ForeignKey(ExerciseVariables, related_name='user_variable_logs', on_delete=models.CASCADE)
    old_percentage = models.IntegerField()
    new_percentage = models.IntegerField()
    changed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.exercise_variable} - {self.changed_at}"
