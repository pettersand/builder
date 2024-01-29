// utilities/builder/simple/types.ts

export interface ProgramNotes {
  customName: string;
  focus: string;
  phase: string;
  considerations: string;
  notes: string;
}

export interface ExerciseSessionData {
  sessionId: string;
  sets: string[];
  reps: string[];
  load: number[];
  // Additional fields like completion status, color codes, etc.,
}

export interface Exercise {
  exerciseId: string;
  name: string;
  type: string;
  equipment: string;
  sessionData: ExerciseSessionData[];
}

export interface TrainingDay {
  dayId: string;
  dayLabel: string;
  exercises: Exercise[];
}

export interface ProgramData {
  id?: number;
  status: string;
  programData: Partial<{
    programNotes: ProgramNotes;
    sessions: string[];
    trainingDays: TrainingDay[];
  }>;
}

export interface BackendProgramData {
  id?: number;
  status: string;
  program_data: {
    programNotes: ProgramNotes;
    sessions: string[];
    trainingDays: TrainingDay[];
  };
}


export interface BackendResponse {
  message: string;
  data: ProgramData;
}

