// programAPI.ts
import api from "./api";

export const postProgramData = async (programData: any): Promise<any> => {
  try {
    const response = await api.post("/create_program/", programData);
    console.log("Program data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting program data", error);
    throw error;
  }
};
