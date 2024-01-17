import { writable, get as getStoreValue } from "svelte/store";
import type { ProgramData } from "./types";

const sessionStorageKey = "programData";

export const initialState: ProgramData = {
  id: null,
  status: "draft",
  programData: {
    programNotes: {
      customName: "",
      focus: "",
      phase: "",
      considerations: "",
      notes: "",
    },
  },
};


const internalStore = writable<ProgramData>(initialState);

const createProgramStore = () => {
  const { subscribe, set, update } = internalStore;

  return {
    subscribe,
    get: () => getStoreValue(internalStore), 
    updateProgram: (updatedData: Partial<ProgramData>) => {
      update((data) => {
        const newData = { ...data, ...updatedData };
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(newData));
        return newData;
      });
    },
    reset: () => {
      sessionStorage.removeItem(sessionStorageKey);
      set(initialState);
    },
  };
};


export const programStore = createProgramStore();
