import { writable } from "svelte/store";
import type { ProgramNotes } from "./types";

const sessionStorageKey = "programNotes";

const getInitialProgramNotes = () => {
  const stored = sessionStorage.getItem(sessionStorageKey);
  return stored ? JSON.parse(stored) : {
    customName: "",
    focus: "",
    phase: "",
    considerations: "",
    notes: "",
  };
};

const createProgramNotesStore = () => {
  const { subscribe, set, update } = writable(getInitialProgramNotes());

  return {
    subscribe,
    updateNotes: (newNotes) => {
      update(notes => {
        const updatedNotes = { ...notes, ...newNotes };
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(updatedNotes));
        return updatedNotes;
      });
    },
    reset: () => set(getInitialProgramNotes()),
  };
};

export const programNotesStore = createProgramNotesStore();
