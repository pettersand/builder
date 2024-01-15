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
    const { subscribe, set, update } = writable<ProgramNotes>(initialState);

    return {
        subscribe,
        updateNotes: (newNotes: Partial<ProgramNotes>) => {
            update((notes) => ({ ...notes, ...newNotes }));
        },
        reset: () => set(initialState),
    };
}

export const programNotesStore = createProgramNotesStore();