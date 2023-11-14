from django.contrib import admin
from .models import (
    User,
    UserProfile,
    Role,
    UserRole,
    OfficialBeginnerTemplate,
    TrainerClient,
    AccountMetrics,
    ClientNote,
    Program,
)

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Role)
admin.site.register(UserRole)
admin.site.register(OfficialBeginnerTemplate)
admin.site.register(TrainerClient)
admin.site.register(AccountMetrics)
admin.site.register(ClientNote)
admin.site.register(Program)
