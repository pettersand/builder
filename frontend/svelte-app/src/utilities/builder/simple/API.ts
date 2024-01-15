// utilities/builder/simple/API.ts
import api from "../../api";
import type { ProgramData } from "./types";

export const formatProgramDataForBackend = (programData: ProgramData) => {
    return {
      ...programData,
      program_data: programData.programData,
    };
  };

/**
 * TODO: add usage of formatProgramDataForBackend
 */

export const saveProgramData = async (
  programData: ProgramData
): Promise<ProgramData> => {
  try {
    let response;
    if (programData.id) {
      response = await api.put(
        `/update_program/${programData.id}`,
        programData
      );
    } else {
      response = await api.post("/create_program/", programData);
    }
    console.log("Program data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving program data", error);
    throw error;
  }
};
