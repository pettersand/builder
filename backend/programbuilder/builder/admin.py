from django.contrib import admin
from .models import User, UserProfile, Role, UserRole

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Role)
admin.site.register(UserRole)
