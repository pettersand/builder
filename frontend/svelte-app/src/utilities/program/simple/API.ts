// utilities/program/simple/API.ts

import api from "../../api";
import { formatProgramDataForBackend } from "./functions";
import type { ProgramData } from "./types";

export const fetchProgramData = async (programId: number): Promise<ProgramData> => {
    try {
        const response = await api.get(`/programs/${programId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching program data", error);
        throw error;
    }
};

export const saveProgramData = async (programData: ProgramData): Promise<ProgramData> => {
    const formattedData = formatProgramDataForBackend(programData);
    try {
        let response;
        if (programData.id) {
            response = await api.put(`/update_program/${programData.id}`, formattedData);
        } else {
            response = await api.post("/create_program/", formattedData);
        }
        console.log("Program data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error saving program data", error);
        throw error;
    }
};