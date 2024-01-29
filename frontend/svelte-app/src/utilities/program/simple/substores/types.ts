// utilities/program/simple/substores/types.ts
import type { TrainingDay } from "../types";

export interface TemplateVariables {
    days: number;
    sessions: number;
    exercises: number;
}

export interface TemplateState {
    trainingDays: TrainingDay[];
    sessions: string[];
  }