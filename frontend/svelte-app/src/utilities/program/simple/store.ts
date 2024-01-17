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
import { fetchProgramData, saveProgramData } from "./API";

const sessionStorageKey = "programData";

const initialState: ProgramData = {
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

//* Creates store

//* Collects Data from server

//* Sends data to sub stores

//* Collects data from sub stores

//* Sends data to server