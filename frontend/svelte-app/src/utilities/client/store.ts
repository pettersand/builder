// utilities/client/store.ts

import { writable } from 'svelte/store';
import type { Client, ClientData } from './types';
import { fetchClientData, fetchTrainersClients } from './API';

function createClientsStore() {
    const { subscribe, set, update } = writable<Client[]>([]);
  
    return {
      subscribe,
      set,
      update,
      fetchAndInitialize: async () => {
        try {
          const clients = await fetchTrainersClients();
          set(clients);
          sessionStorage.setItem('clients', JSON.stringify(clients));
        } catch (error) {
          console.error('Error initializing clients:', error);
        }
      }
    };
  }
  
  function createActiveClientStore() {
    const { subscribe, set } = writable<string | null>(getInitialActiveClient());
  
    function getInitialActiveClient(): string | null {
      const storedValue = sessionStorage.getItem('activeClient');
      return storedValue ? JSON.parse(storedValue) : null;
    }
  
    return {
      subscribe,
      set,
      updateActiveClient: (clientId: string) => {
        set(clientId);
        sessionStorage.setItem('activeClient', JSON.stringify(clientId));
      }
    };
  }
  
  function createClientDataStore() {
    const { subscribe, set, update } = writable<ClientData | null>(null);
  
    return {
      subscribe,
      set,
      update,
      fetchClientData: async (clientId: string) => {
        try {
          // Call your API to fetch client data
          const response = await fetchClientData(clientId);
          console.log('Client data response', response)
          set(response);
        } catch (error) {
          console.error('Error fetching client data:', error);
          set(null);
        }
      }
    };
  }
  
  export const clients = createClientsStore();
  export const activeClient = createActiveClientStore();
  export const clientData = createClientDataStore();