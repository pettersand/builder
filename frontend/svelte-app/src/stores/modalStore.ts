// modalStore.ts
import { writable } from "svelte/store";

// Initialize the state
const initialState = {
  showModal: false,
  ModalComponent: null,
};

const modalStore = writable(initialState);

// Define methods to update the store
const methods = {
  openModal: (ModalComponent) => {
    modalStore.set({
      showModal: true,
      ModalComponent,
    });
  },
  closeModal: () => {
    modalStore.set({ ...initialState });
  },
};

export default {
  subscribe: modalStore.subscribe,
  ...methods,
};
