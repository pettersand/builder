from .user_serializer import Step1Serializer, Step2Serializer, LoginSerializer
from .trainer_serializer import TrainerSerializer, UserSerializer
from .client_serializer import (
    ClientGoalsSerializer,
    ClientDataSerializer,
    ClientNotesSerializer,
    ClientPreferencesSerializer,
    ClientInjuriesSerializer,
    FetchClientGoalsSerializer,
    NestedGoalSerializer,
)
from .program_serializer import ProgramSerializer
from .goals_serializer import NewGoalSerializer, FetchGoalsSerializer, GoalSerializer, FetchClientGoalsSerializer
