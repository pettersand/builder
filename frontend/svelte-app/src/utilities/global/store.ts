// utilties/global/store.ts

import { writable } from "svelte/store";
import type { GlobalStoreState } from "./types";

const initialState: GlobalStoreState = {
    theme: localStorage.getItem("theme") || "light",
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
    saveStatus: "Changes Detected",
};

const globalStore = writable(initialState);

const setTheme = (newTheme: "light" | "dark") => {
    globalStore.update((state) => ({ ...state, theme: newTheme }));
};

const setAuthenticationStatus = (authStatus: boolean) => {
    globalStore.update((state) => ({ ...state, isAuthenticated: authStatus }));
};

const setSaveStatus = (newStatus: string) => {
    globalStore.update((state) => ({ ...state, saveStatus: newStatus }));
};

export const globalStoreMethods = {
    setTheme,
    setAuthenticationStatus,
    setSaveStatus,
};

export default {
    subscribe: globalStore.subscribe,
    ...globalStoreMethods,
};