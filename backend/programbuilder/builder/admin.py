from django.contrib import admin
from .models import User, UserProfile, Role, UserRole, OfficialBeginnerTemplate

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Role)
admin.site.register(UserRole)
admin.site.register(OfficialBeginnerTemplate)
