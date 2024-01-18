// In refreshSubstores.ts

/**
 * TODO: Add "bridging" functions between mainStore and subStores - refresh, reset
 */

import { get as getStoreValue } from 'svelte/store';
import { mainProgramStore } from '../store';
import { notesStore } from './notesStore';

// Function to update the main program store from notesStore
export const updateMainStoreFromNotes = (updatedNotes) => {
    const currentProgramData = getStoreValue(mainProgramStore);
    const updatedProgramData = {
        ...currentProgramData,
        programData: {
            ...currentProgramData.programData,
            programNotes: updatedNotes,
        },
    };
    mainProgramStore.updateProgram(updatedProgramData);
};

// Function to refresh notesStore from mainProgramStore
export const refreshNotesFromMainStore = () => {
    const currentProgramData = getStoreValue(mainProgramStore);
    notesStore.set(currentProgramData.programData.programNotes);
};