/**
 * TODO: Auto saving (debounce)
 * TODO: Component for showing save status
 * TODO: Unsaved changes prompt to save - rework global stores
 *
 * TODO: Determine editability flags / role based editing
 *
 * TODO: Reusable input handler function
 * TODO: Reusable form/input validation
 * TODO: Other reusable functions: save, reset, update
 * TODO: Define use of mount and destroy
 * TODO: Data naming conversion for backend/frontend
 */

import { writable, get as getStoreValue } from "svelte/store";
import type { ProgramData } from "./types";
import { fetchProgramData } from "./API";
import { setComponentSaveStatus } from "../../global/store";

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
  };

  const syncWithSessionStorage = () => {
    const currentData = getStoreValue(programStore);
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(currentData));
  };

  const fetchAndUpdate = async (programId: number) => {
    const fetchedData = await fetchProgramData(programId);
    set(fetchedData);
  };

  return {
    subscribe,
    updateProgram,
    resetProgram,
    syncWithSessionStorage,
    fetchAndUpdate,
  };
};

export const mainProgramStore = createProgramStore();