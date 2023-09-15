// messageStore.ts
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export interface MessageState {
  message: string;
  type: string; // "error", "confirmation"
  visible: boolean;
}

// Initial state
const initialState: MessageState = {
  message: "",
  type: "",
  visible: false,
};

const messageStore: Writable<MessageState> = writable(initialState);

export const showMessage = (message: string, type: string): void => {
  messageStore.update((state) => {
    return { ...state, message, type, visible: true };
  });
};

export const hideMessage = (): void => {
  messageStore.update((state) => {
    return { ...state, visible: false };
  });
};

export default messageStore;
