import { writable } from 'svelte/store';

// Initialize with 'dark' or 'light' based on user preference or default to 'dark'
const themeStore = writable(localStorage.getItem('theme') || 'dark');

// Subscribe to changes and update localStorage
themeStore.subscribe((value) => {
  localStorage.setItem('theme', value);
});

export default themeStore;