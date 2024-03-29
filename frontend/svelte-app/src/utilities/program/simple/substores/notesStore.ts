// utilities/program/simple/substores/notesStore.ts

import { writable } from "svelte/store";
import type { ProgramNotes, ProgramData } from "../types";
import { setComponentSaveStatus } from "../../../global/store";
import { getCurrentProgramData } from "../store";
import { updateMainStoreFromNotes } from "../functions";
import { eventBus } from "../../../global/eventBus";

/**
 * * Handles the program notes section of program data.
 * * Works closely with relevant components in charge of displaying, and editing program notes.
 */

const getInitialState = () => {
  const currentData = getCurrentProgramData();
  return currentData.programData.programNotes;
};

const notesStore = writable<ProgramNotes>(getInitialState());

eventBus.subscribe((event) => {
  if (event?.type === "REFRESH_PROGRAM") {
    handleRefreshEvent(event.payload);
  }
});

function handleRefreshEvent(payload: ProgramData) {
  const { programNotes } = payload.programData;
  notesStore.set(programNotes);
}

const updateNotes = (updatedNotes: Partial<ProgramNotes>) => {
  notesStore.update((notes) => {
    const newNotes = { ...notes, ...updatedNotes };
    updateMainStoreFromNotes(newNotes);
    setComponentSaveStatus("programData", "Changes Detected");
    return newNotes;
  });
};

export { notesStore, updateNotes };

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
