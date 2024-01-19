// utilties/global/store.ts

import { writable } from "svelte/store";
import type { GlobalStoreState } from "./types";

const initialState: GlobalStoreState = {
  theme: localStorage.getItem("theme") || "light",
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
};

const globalStore = writable(initialState);

const getInitialSaveStatus = () => {
  const savedStatus = sessionStorage.getItem("saveStatus");
  return savedStatus ? JSON.parse(savedStatus) : { programData: "Saved" };
};

export const saveStatusStore = writable(getInitialSaveStatus());

export const setComponentSaveStatus = (
  componentName: string,
  status: string
) => {
  saveStatusStore.update((state) => {
    const newState = { ...state, [componentName]: status };
    sessionStorage.setItem("saveStatus", JSON.stringify(newState));
    return newState;
  });
};

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
