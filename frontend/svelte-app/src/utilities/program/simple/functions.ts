// utilities/program/simple/functions.ts

import type { ProgramData, BackendProgramData } from "./types";
import { get as getStoreValue } from "svelte/store";
import { mainProgramStore } from "./store";
import { createProgram, updateProgram } from "./API";
import { setComponentSaveStatus } from "../../global/store";

// Formats data from Frontend to Backend syntax, and vice versa for the second function
export const formatProgramDataForBackend = (programData: ProgramData): any => {
  const { programData: frontEndProgramData, ...rest } = programData;
  return {
    ...rest,
    program_data: frontEndProgramData,
  };
};

export const formatProgramDataForFrontend = (
  backendProgramData: BackendProgramData
): ProgramData => {
  const { program_data, ...rest } = backendProgramData;
  return {
    ...rest,
    programData: program_data,
  };
};


// Function on save buttons, to check if program exists and call create or update
export const saveProgram = async (): Promise<void> => {
  const currentProgramData: ProgramData = getStoreValue(mainProgramStore);

  // Check for active program
  if (currentProgramData.id) {
    try {
      const updatedProgram = await updateProgram(currentProgramData);
      mainProgramStore.updateProgram(updatedProgram);
      console.log("Program updated");
      setComponentSaveStatus("programData", "Saved");
    } catch (error) {
      console.error("Error updating program", error);
    }
  } else {
    // Create new program
    try {
      const newProgram = await createProgram(currentProgramData);
      mainProgramStore.updateProgram(newProgram);
      console.log("New program created");
      setComponentSaveStatus("programData", "Saved");
    } catch (error) {
      console.error("Error creating new program", error);
    }
  }
};
