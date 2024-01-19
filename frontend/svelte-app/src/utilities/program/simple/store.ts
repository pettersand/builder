/**
 * TODO: Determine editability flags / role based editing
 *
 * TODO: Reusable input handler function
 * TODO: Reusable form/input validation
 * TODO: Other reusable functions: save, reset, update
 * TODO: Define use of mount and destroy
 * TODO: Data naming conversion for backend/frontend
 */
// utilities/program/simple/store.ts

import { writable, get as getStoreValue } from "svelte/store";
import type { ProgramData } from "./types";
import { setComponentSaveStatus } from "../../global/store";
import { eventBus } from "../../global/eventBus";

const sessionStorageKey = "programData";
const defaultState: ProgramData = {
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

const getInitialState = () => {
  const stored = sessionStorage.getItem(sessionStorageKey);
  return stored ? JSON.parse(stored) : defaultState;
};

const programStore = writable<ProgramData>(getInitialState());

//* Creates store
export const createProgramStore = () => {
  const { subscribe, set, update } = programStore;

  const updateProgram = (updatedData: Partial<ProgramData>) => {
    update((data) => ({ ...data, ...updatedData }));
    syncWithSessionStorage();
  };

  const resetProgram = () => {
    sessionStorage.removeItem(sessionStorageKey);
    set(defaultState);
    setComponentSaveStatus("programData", "Saved");
    
    eventBus.emit({ type: "REFRESH_PROGRAM", payload: defaultState });
  };

  const syncWithSessionStorage = () => {
    const currentData = getStoreValue(programStore);
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(currentData));
  };

  return {
    subscribe,
    updateProgram,
    resetProgram,
    syncWithSessionStorage,
  };
};

export const mainProgramStore = createProgramStore();
export const getCurrentProgramData = (): ProgramData =>
  getStoreValue(mainProgramStore);
