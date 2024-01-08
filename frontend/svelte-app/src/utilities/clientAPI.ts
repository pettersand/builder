// clientAPI.ts
import api from "./api";
import type { Client } from "../types/Client";

export const fetchTrainersClients = async (): Promise<any> => {
  try {
    const storedClients = sessionStorage.getItem("clients");
    if (storedClients) {
      return JSON.parse(storedClients);
    } else {
      const response = await api.get("/trainer_clients/");
      const clients: Client = response.data.map(client => ({
        id: client.client_id,
        username: client.username,
        email: client.email,
        firstName: client.first_name,
        lastName: client.last_name,
        status: client.status,
      }));
      console.log("Clients", clients);
      sessionStorage.setItem("clients", JSON.stringify(clients));
      return clients;
    }
  } catch (error) {
    console.error("Error fetching clients");
    throw error;
  }
};

export const fetchClientData = async (clientId: string): Promise<any> => {
  try {
    const response = await api.get(`/client_data/?clientId=${clientId}`);
    console.log("Client data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching client data", error);
    throw error;
  }
};
