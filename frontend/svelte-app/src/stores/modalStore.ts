// modalStore.ts
import { writable } from "svelte/store";

// Initialize the state
const initialState = {
  showModal: false,
  modalContent: "",
  modalType: "",
};

const modalStore = writable(initialState);

// Define methods to update the store
const methods = {
  toggleModalWithContent: (type: string, content: string) => {
    modalStore.update((state) => {
      return {
        ...state,
        showModal: !state.showModal,
        modalType: type,
        modalContent: content,
      };
    });
  },
  closeModal: () => {
    modalStore.update((state) => {
      return { ...state, showModal: false, modalType: "", modalContent: "" };
    });
  },
};

export default {
  subscribe: modalStore.subscribe,
  ...methods,
};
