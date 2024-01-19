import { writable } from "svelte/store";

export interface EventBusEvent {
    type: string;
    payload?: any;
  }

  export const eventBus = (() => {
    const { subscribe, set } = writable<EventBusEvent>(null);
  
    return {
      subscribe,
      emit: (event: EventBusEvent) => set(event)
    };
  })();