from django.contrib import admin
from .models import (
    User,
    UserProfile,
    Role,
    UserRole,
    OfficialBeginnerTemplate,
    TrainerClient,
    AccountMetrics,
    TrainerNote,
    Program,
    ClientGoals,
    ClientInjuries,
    ClientPreferences,
    ClientNotes,
    ClientData,
    SimpleGoal,
)


class ClientDataAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Basic Info", {"fields": ("trainer_client",)}),
        ("Client Goals", {"fields": ("goals",)}),
        ("Client Injuries", {"fields": ("injuries",)}),
        ("Client Preferences", {"fields": ("preferences",)}),
        ("Client Notes", {"fields": ("notes",)}),
    )


admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Role)
admin.site.register(UserRole)
admin.site.register(OfficialBeginnerTemplate)
admin.site.register(TrainerClient)
admin.site.register(AccountMetrics)
admin.site.register(TrainerNote)
admin.site.register(Program)
admin.site.register(ClientGoals)
admin.site.register(ClientInjuries)
admin.site.register(ClientPreferences)
admin.site.register(ClientNotes)
admin.site.register(ClientData, ClientDataAdmin)
admin.site.register(SimpleGoal)