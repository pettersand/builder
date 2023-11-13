// clientStore.ts
import { writable } from "svelte/store";

export const clients = writable([]);

export const setClients = (clientData: any[]) => {
  clients.set(clientData);
};
