// clientStore.ts
import { writable, get } from "svelte/store";
import { user as userStore } from "./userStore";

export const clients = writable([]);

export const setClients = (clientData: any[]) => {
  clients.set(clientData);
};

// Function to read the initial active client from localStorage or use default
const getInitialActiveClient = () => {
  const storedValue = localStorage.getItem("activeClient");
  return storedValue ? JSON.parse(storedValue) : null;
};

export const setActiveTrainerAsClient = () => {
  const trainerDetails = get(userStore);
  activeClient.set({
    client: { ...trainerDetails, isSelf: true },
    clientDetails: null,
  });
};

export const activeClient = writable(getInitialActiveClient());

// Subscribe to the store and update localStorage when it changes
activeClient.subscribe(($activeClient) => {
  localStorage.setItem("activeClient", JSON.stringify($activeClient));
});
