// utilities/program/simple/functions.ts

import type { ProgramData, ProgramNotes } from "./types";
import { createProgram, updateProgram } from "./API";
import { setComponentSaveStatus } from "../../global/store";
import { mainProgramStore } from "./store";

// Function on save buttons, to check if program exists and call create or update
export const saveProgram = async (
  programData: ProgramData
): Promise<ProgramData> => {
  if (programData.id) {
    try {
      const updatedProgram = await updateProgram(programData);
      console.log("Program updated");
      setComponentSaveStatus("programData", "Saved");
      return updatedProgram;
    } catch (error) {
      console.error("Error updating program", error);
      throw error;
    }
  } else {
    try {
      const newProgram = await createProgram(programData);
      console.log("New program created");
      setComponentSaveStatus("programData", "Saved");
      return newProgram;
    } catch (error) {
      console.error("Error creating new program", error);
      throw error;
    }
  }
};

export const updateMainStoreFromNotes = (updatedNotes: ProgramNotes) => {
  const updatedData: Partial<ProgramData> = {
    programData: { programNotes: updatedNotes },
  };
  mainProgramStore.updateProgram(updatedData);
};
