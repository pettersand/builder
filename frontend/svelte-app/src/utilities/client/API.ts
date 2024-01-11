// utilities/client/API.ts

import api from "../api";
import { convertToFrontendClient } from "./functions";
import type { Client, ClientData } from "./types";

export const fetchTrainersClients = async (): Promise<Client[]> => {
  try {
    const storedClients = sessionStorage.getItem("clients");
    if (storedClients) {
      return JSON.parse(storedClients).map(convertToFrontendClient);
    } else {
        const response = await api.get("/trainer_clients/");
        const clients = response.data.map(convertToFrontendClient);
        sessionStorage.setItem("clients", JSON.stringify(clients));
        return clients;
    }
  } catch (error) {
    console.error("Error fetching clients");
    throw error;
  }
};

export const fetchClientData = async (clientId: string): Promise<ClientData> => {
  try {
    const response = await api.get(`/client_data/?clientId=${clientId}`);
    console.log("Client data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching client data", error);
    throw error;
  }
};