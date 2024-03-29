// utilities/program/simple/API.ts

import api from "../../api";
import type { ProgramData, BackendProgramData } from "./types";
import { feedbackStore } from "../../feedback/store";

/**
 * * Handles data formatting and communication with backend. 
 */


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

export const fetchProgramData = async (programId: number): Promise<ProgramData> => {
    try {
        const response = await api.get(`/get_program/${programId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching program data", error);
        throw error;
    }
};

export const updateProgram = async (programData: ProgramData): Promise<ProgramData> => {
    const formattedData = formatProgramDataForBackend(programData);
    try {
        const response = await api.put(`/update_program/${programData.id}`, formattedData);
        console.log("Program updated", response.data.message);
        feedbackStore.setSuccess({ successMessage: response.data.message});
        return formatProgramDataForFrontend(response.data.data);
    } catch (error) {
        console.error("Error updating program", error);
        feedbackStore.setError({
            errorMessage: error.response?.data?.message || "Error saving program",
            errorCode: "SAVE_PROGRAM_ERROR",
            errorDetails: error.message
          });
        throw error;
    }
};

export const createProgram = async (programData: ProgramData): Promise<ProgramData> => {
    const formattedData = formatProgramDataForBackend(programData);
    try {
        const response = await api.post("/create_program/", formattedData);
        console.log("New program created", response.data.message);
        feedbackStore.setSuccess({ successMessage: response.data.message}); 
        return formatProgramDataForFrontend(response.data.data);
    } catch (error) {
        console.error("Error creating new program", error);
        feedbackStore.setError({
          errorMessage: error.response?.data?.message || "Error creating new program",
          errorCode: "CREATE_PROGRAM_ERROR",
          errorDetails: error.message
        });
        throw error;
    }
};

export const deleteProgram = async (programId: number): Promise<void> => {
    try {
        await api.delete(`/delete_program/${programId}`);
        console.log("Program deleted");
    } catch (error) {
        console.error("Error deleting program", error);
        throw error;
    }
};