import { writable } from "svelte/store";
import type { ProgramData } from "./types";

const sessionStorageKey = "programData";

const initialState: ProgramData = {
    id: null,
    status: "draft",
    program_data: {
      programNotes: {
        customName: "",
        focus: "",
        phase: "",
        considerations: "",
        notes: "",
      },
    },
  };

  const createProgramStore = () => {
    const { subscribe, set, update } = writable<ProgramData>(initialState);
  
    return {
      subscribe,
      updateProgram: (updatedData: Partial<ProgramData>) => {
        update(data => {
          const newData = { ...data, ...updatedData };
          sessionStorage.setItem(sessionStorageKey, JSON.stringify(newData));
          return newData;
        });
      },
      reset: () => {
        sessionStorage.removeItem(sessionStorageKey);
        set(initialState);
      },
    };
  };

  export const programStore = createProgramStore();
