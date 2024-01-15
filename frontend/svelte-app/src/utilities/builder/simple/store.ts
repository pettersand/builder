import { writable } from "svelte/store";
import type { ProgramNotes } from "./types";

const initialState: ProgramNotes = {
    customName: "",
    focus: "",
    phase: "",
    considerations: "",
    notes: "",
    };

const createProgramNotesStore = () => {
    const getInitialNotes = (): ProgramNotes => {
        const storedNotes = sessionStorage.getItem("programNotes");
        return storedNotes ? JSON.parse(storedNotes) : initialState;
    };

    const { subscribe, set, update } = writable<ProgramNotes>(initialState);

     return {
    subscribe,
    updateNotes: (newNotes: Partial<ProgramNotes>) => {
      update((notes) => {
        const updatedNotes = { ...notes, ...newNotes };
        sessionStorage.setItem('programNotes', JSON.stringify(updatedNotes));
        return updatedNotes;
      });
    },
    reset: () => {
      const resetState = initialState;
      set(resetState);
      sessionStorage.setItem('programNotes', JSON.stringify(resetState));
    },
  };
}

export const programNotesStore = createProgramNotesStore();