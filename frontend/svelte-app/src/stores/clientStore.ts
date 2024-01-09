// clientStore.ts

/**
 * * Stores activeClient and client list
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
  const { subscribe, set } = writable<string | null>(getInitialActiveClient());

  function getInitialActiveClient(): string | null {
    const storedValue = sessionStorage.getItem('activeClient');
    return storedValue ? JSON.parse(storedValue) : null;
  }

  return {
    subscribe,
    set,
    updateActiveClient: (client: string) => {
      set(client);
      sessionStorage.setItem('activeClient', JSON.stringify(client));
    }
  };
}

export const clients = createClientsStore();
export const activeClient = createActiveClientStore();
