// utilities/program/simple/substores/notesStore.ts

import { writable, get as getStoreValue } from "svelte/store";
import type { ProgramNotes } from "../types";
import { mainProgramStore } from "../store";
import { initialState as mainInitialState } from "../store";

/**
 * * Handles the program notes section of program data. 
 * * Works closely with relevant components in charge of displaying, and editing program notes.
 */

const initialState = mainInitialState.programData.programNotes;

const createNotesStore = () => {
  const { subscribe, set, update } = writable<ProgramNotes>({
    customName: "",
    focus: "",
    phase: "",
    considerations: "",
    notes: "",
  });

  return {
    subscribe,
    updateNotes: (updatedNotes: Partial<ProgramNotes>) => {
      update((notes) => ({ ...notes, ...updatedNotes }));
      syncWithMainStore();
    },
    reset: () =>
      set({
        customName: "",
        focus: "",
        phase: "",
        considerations: "",
        notes: "",
      }),
  };
};

const syncWithMainStore = () => {
  const currentNotes = getStoreValue(programNotesStore);
  mainProgramStore.updateProgram({
    programData: { programNotes: currentNotes },
  });
};

export const programNotesStore = createNotesStore();
