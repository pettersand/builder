// utilities/program/simple/substores/functions.ts

import type { Writable } from "svelte/store";
import type { ProgramData, ProgramNotes } from "../types";


/**
 * * Handles communication between mainStore and subStores. 
 * * Updates main store, and refreshes substore data.
 */

export const getCurrentState = (mainStore: Writable<ProgramData>) => {
    return mainStore.subscribe((currentState) => currentState);
    };

// Function to update main store with data from substores


// Function to refresh substore data based on main store's data
export const refreshSubstoreData = (
  mainStoreData: ProgramData,
  refreshCallback: (data: ProgramNotes) => void
) => {
  refreshCallback(mainStoreData.programData.programNotes);
};
