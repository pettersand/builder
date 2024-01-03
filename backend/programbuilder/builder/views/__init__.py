from .user_views import (
    LoginView,
    RegisterStep1View,
    RegisterStep2View,
    LogoutView,
    CheckAuthStatus,
)
from .official_templates_views import OfficialTemplateList
from .trainer_views import TrainerClientsView
from .client_views import (
    ClientGoalView,
    ClientNotesView,
    ClientInjuriesView,
    ClientPreferencesView,
    ClientDataView,
)
from .program_views import CreateProgramView
from .goal_views import NewSimpleGoal, FetchGoals
