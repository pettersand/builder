// utilities/program/simple/substores/functions.ts

import type { Writable } from "svelte/store";
import type {
  ProgramData,
  ProgramNotes,
  TrainingDay,
  Exercise,
  ExerciseSessionData,
} from "../types";

/**
 * * Handles communication between mainStore and subStores.
 * * Updates main store, and refreshes substore data.
 */

export function generateProgramTemplate(
  days: number,
  sessions: number,
  exercises: number
): { trainingDays: TrainingDay[]; sessions: string[] } {
  const trainingDays: TrainingDay[] = [];
  const sessionLabels: string[] = [];

  // Generates session labels
  for (let i = 1; i <= sessions; i++) {
    sessionLabels.push(`Session ${i}`);
  }

  // Generates each training day
  for (let day = 1; day <= days; day++) {
    const exercisesArray: Exercise[] = [];

    // Generate exercises for each day
    for (let exercise = 1; exercise <= exercises; exercise++) {
      const sessionDataArray: ExerciseSessionData[] = [];

      // Generate session data for each exercise
      for (let session = 1; session <= sessions; session++) {
        const sessionData: ExerciseSessionData = {
          sessionId: `session${session}`,
          sets: [],
          reps: [],
          load: [],
        };
        sessionDataArray.push(sessionData);
      }

      const exerciseObj: Exercise = {
        exerciseId: `day${day}_exercise${exercise}`,
        name: "",
        type: "",
        equipment: "",
        sessionData: sessionDataArray,
      };
      exercisesArray.push(exerciseObj);
    }

    const trainingDay: TrainingDay = {
      dayId: `day${day}`,
      dayLabel: `Day ${day}`,
      exercises: exercisesArray,
    };
    trainingDays.push(trainingDay);
  }
  return { trainingDays, sessions: sessionLabels };
}
