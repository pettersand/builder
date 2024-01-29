// utilities/program/simple/functions.ts

import type { ProgramData, ProgramNotes, TrainingDay } from "./types";
import { createProgram, updateProgram } from "./API";
import { setComponentSaveStatus } from "../../global/store";
import { mainProgramStore } from "./store";

// Function on save buttons, to check if program exists and call create or update
export const saveProgram = async (
  programData: ProgramData
): Promise<ProgramData> => {
  try {
    const response = programData.id
      ? await updateProgram(programData)
      : await createProgram(programData);

    mainProgramStore.updateProgram(response);
    setComponentSaveStatus("programData", "Saved");
    return response;
  } catch (error) {
    console.error("Error in program operation", error);
    throw error;
  }
};

export const updateMainStoreFromNotes = (updatedNotes: ProgramNotes) => {
  const updatedData: Partial<ProgramData> = {
    programData: { programNotes: updatedNotes },
  };
  mainProgramStore.updateProgram(updatedData);
};

export const updateMainStoreFromTemplate = (updatedTrainingDays: TrainingDay[], updatedSessions: string[]) => {
  const updatedData: Partial<ProgramData> = {
    programData: {
      trainingDays: updatedTrainingDays,
      sessions: updatedSessions
    },
  };
  mainProgramStore.updateProgram(updatedData);
};
