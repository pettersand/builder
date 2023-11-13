// clientAPI.ts
import api from "./api";

export const fetchTrainersClients = async (): Promise<any> => {
  try {
    const response = await api.get("/trainer_clients/");
    return response.data;
  } catch (error) {
    console.error("Error fetching clients");
    throw error;
  }
};
