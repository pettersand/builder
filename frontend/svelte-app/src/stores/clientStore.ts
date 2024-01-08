// clientStore.ts

/**
 * * Stores activeClient and client list
 * TODO: Rework to read from sessionStorage instead of localStorage
 */
import { writable } from 'svelte/store';
import type { Client } from '../types/Client';

function createClientsStore() {
  const { subscribe, set, update } = writable<Client[]>([]);

  return {
    subscribe,
    set,
    update,
    initialize: () => {
      const storedClients = sessionStorage.getItem('clients');
      if (storedClients) {
        set(JSON.parse(storedClients));
      }
    }
  };
}

function createActiveClientStore() {
  const { subscribe, set } = writable<Client | null>(getInitialActiveClient());

  function getInitialActiveClient(): Client | null {
    const storedValue = sessionStorage.getItem('activeClient');
    return storedValue ? JSON.parse(storedValue) : null;
  }

  return {
    subscribe,
    set,
    updateActiveClient: (client: Client) => {
      set(client);
      sessionStorage.setItem('activeClient', JSON.stringify(client));
    }
  };
}

export const clients = createClientsStore();
export const activeClient = createActiveClientStore();
