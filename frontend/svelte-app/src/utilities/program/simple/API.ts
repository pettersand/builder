// utilities/program/simple/API.ts

import api from "../../api";
import { formatProgramDataForBackend } from "./functions";
import type { ProgramData } from "./types";

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
        console.log("Program updated", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating program", error);
        throw error;
    }
};

export const createProgram = async (programData: ProgramData): Promise<ProgramData> => {
    const formattedData = formatProgramDataForBackend(programData);
    try {
        const response = await api.post("/create_program/", formattedData);
        console.log("New program created", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating new program", error);
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