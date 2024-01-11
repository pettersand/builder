// utilities/modal/store.ts

import { writable } from "svelte/store";
import type { ModalState } from "./types";
import type { SvelteComponent } from "svelte";

function createModalStore() {
  const initialState: ModalState = {
    showModal: false,
    ModalComponent: null,
    props: {},
  };

  const { subscribe, set } = writable<ModalState>(initialState);

  return {
    subscribe,
    openModal: (
      ModalComponent: new (...args: any[]) => SvelteComponent,
      props = {}
    ) => {
      set({ showModal: true, ModalComponent, props });
    },
    closeModal: () => {
      set(initialState);
    },
  };
}

export const modalStore = createModalStore();
