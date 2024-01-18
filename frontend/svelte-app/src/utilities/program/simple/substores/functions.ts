// In refreshSubstores.ts

export const refreshAllSubstores = () => {
    refreshNotes();
    // Add other substores refresh methods here
}

// In mainStore.ts
import { refreshAllSubstores } from './refreshSubstores';

const createProgramStore = () => {
    // ...
    const resetProgram = () => {
        sessionStorage.removeItem(sessionStorageKey);
        set(defaultState);
        refreshAllSubstores(); // Refresh all substores
    };
    // ...
};

