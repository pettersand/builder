// utilities/program/simple/substores/notesStore.ts

import { writable, get as getStoreValue } from "svelte/store";
import type { ProgramNotes } from "../types";
import { mainProgramStore, getProgramData } from "../store";
import { setComponentSaveStatus } from "../../../global/store";


/**
 * * Handles the program notes section of program data.
 * * Works closely with relevant components in charge of displaying, and editing program notes.
 */


const getInitialState = () => {
  const mainData = getProgramData();
  return mainData.programData.programNotes;
}

const notesStore = writable<ProgramNotes>(getInitialState());

export const refreshNotes = () => {
  const { programNotes } = getProgramData().programData;
  notesStore.set(programNotes);
};

const updateNotes = (updatedNotes: Partial<ProgramNotes>) => {
  notesStore.update((notes) => ({ ...notes, ...updatedNotes }));
  mainProgramStore.updateProgram({
    programData: { programNotes: { ...getStoreValue(notesStore), ...updatedNotes } },
  });
  setComponentSaveStatus("programData", "Changes Detected");
};

/* export const resetNotes = () => {
  notesStore.set(getNotesInitialState());
}; */

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
