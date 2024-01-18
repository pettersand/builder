// utilities/program/simple/substores/notesStore.ts

import { writable, get as getStoreValue, get } from "svelte/store";
import type { ProgramNotes } from "../types";
import { mainProgramStore } from "../store";
import { setComponentSaveStatus } from "../../../global/store";

/**
 * * Handles the program notes section of program data.
 * * Works closely with relevant components in charge of displaying, and editing program notes.
 */

const getNotesInitialState = () => {
  const mainState = getStoreValue(mainProgramStore);
  return mainState.programData.programNotes;
};

const notesStore = writable<ProgramNotes>(getNotesInitialState());

// Reactive subscription to sync with mainProgramStore
notesStore.subscribe((currentNotes) => {
  mainProgramStore.updateProgram({
    programData: { programNotes: currentNotes },
  });
});

const updateNotes = (updatedNotes: Partial<ProgramNotes>) => {
  notesStore.update((notes) => ({ ...notes, ...updatedNotes }));
  setComponentSaveStatus("programData", "Changes Detected");
};

export const resetNotes = () => {
  notesStore.set(getNotesInitialState());
}; 

export { notesStore, updateNotes};


/* const createNotesStore = () => {
  const { subscribe, set, update } = writable<ProgramNotes>(initialState);

  return {
    subscribe,
    updateNotes: (updatedNotes: Partial<ProgramNotes>) => {
      update((notes) => ({ ...notes, ...updatedNotes }));
      syncWithMainStore();
    },
    reset: () =>
      set(initialState),
  };
};

const syncWithMainStore = () => {
  const currentNotes = getStoreValue(programNotesStore);
  mainProgramStore.updateProgram({
    programData: { programNotes: currentNotes },
  });
};

export const programNotesStore = createNotesStore(); */
