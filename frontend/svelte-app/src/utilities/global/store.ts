// utilties/global/store.ts

import { writable } from "svelte/store";
import type { GlobalStoreState } from "./types";

const initialState: GlobalStoreState = {
    theme: localStorage.getItem("theme") || "light",
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
};

const globalStore = writable(initialState);

const saveStatusStore = writable({
    programData: "Saved",
    // other components to be added (workout, pro builder, etc.)
  });

export const setComponentSaveStatus = (componentName: string, status: string) => {
    saveStatusStore.update((state) => ({ ...state, [componentName]: status }));
}

const setTheme = (newTheme: "light" | "dark") => {
    globalStore.update((state) => ({ ...state, theme: newTheme }));
    localStorage.setItem("theme", newTheme);
  };

const setAuthenticationStatus = (authStatus: boolean) => {
    globalStore.update((state) => ({ ...state, isAuthenticated: authStatus }));
    sessionStorage.setItem("isAuthenticated", authStatus.toString());
};

export default {
    subscribe: globalStore.subscribe,
    setTheme,
    setAuthenticationStatus,
    saveStatusStore,
    setComponentSaveStatus,
  };