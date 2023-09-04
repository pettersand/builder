import { writable } from "svelte/store";

type Level = "Beginner" | "Intermediate" | "Expert";

// Initialize the state
const initialState = {
    theme: localStorage.getItem("theme") || "dark", // Initialize with 'dark' or 'light' based on user preference or default to 'dark'
    level: "Beginner" as Level, // Initialize with 'Beginner'
    showModal: false, // Initialize with false
    currentPage: localStorage.getItem("currentPage") || "Dashboard", // Initialize with 'Dashboard' or based on user preference
  };

const globalStore = writable(initialState);

// Subscribe to changes and update localStorage for theme
globalStore.subscribe((state) => {
    localStorage.setItem("theme", state.theme);
    localStorage.setItem("currentPage", state.currentPage);
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
  toggleModal: () => {
    globalStore.update((state) => {
      return { ...state, showModal: !state.showModal };
    });
  },
  setCurrentPage: (newPage: string) => {
    globalStore.update((state) => {
      return { ...state, currentPage: newPage };
    });
  },
};

export default {
  subscribe: globalStore.subscribe,
  ...methods,
};