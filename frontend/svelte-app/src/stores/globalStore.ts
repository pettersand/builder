// globalStore.ts

import { writable } from "svelte/store";

type Level = "Beginner" | "Intermediate" | "Expert";

// Initialize the state
const initialState = {
  theme: localStorage.getItem("theme") || "dark",
  level: "Beginner" as Level,
  currentPage: localStorage.getItem("currentPage") || "Dashboard",
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
};

const globalStore = writable(initialState);

// Subscribe to changes and update localStorage for theme and currentPage
globalStore.subscribe((state) => {
  localStorage.setItem("theme", state.theme);
  localStorage.setItem("currentPage", state.currentPage);
  localStorage.setItem("isAuthenticated", state.isAuthenticated.toString());
});

// Define methods to update the store
const methods = {
  setTheme: (newTheme: "dark" | "light") => {
    globalStore.update((state) => {
      return { ...state, theme: newTheme };
    });
  },
  setLevel: (newLevel: Level) => {
    globalStore.update((state) => {
      return { ...state, level: newLevel };
    });
  },
  setCurrentPage: (newPage: string) => {
    globalStore.update((state) => {
      return { ...state, currentPage: newPage };
    });
  },
  setAuthenticationStatus: (authStatus: boolean) => {
    globalStore.update((state) => {
      return { ...state, isAuthenticated: authStatus };
    });
  },
};

export default {
  subscribe: globalStore.subscribe,
  ...methods,
};
