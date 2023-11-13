// builderStore.ts

import { writable } from "svelte/store";

// Function to read the initial value from localStorage or use a default
const getInitialProStepState = () => {
  const storedValue = localStorage.getItem("proStepState");
  return storedValue ? JSON.parse(storedValue) : { activeStep: "step1" };
};

export const proStepState = writable(getInitialProStepState());

// Subscribe to the store and update localStorage when it changes
proStepState.subscribe((value) => {
  localStorage.setItem("proStepState", JSON.stringify(value));
});

export const builderState = writable({
  activeOption: "newProgram",
});
