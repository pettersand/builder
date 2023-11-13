// proBuilderStore.ts

import { writable } from "svelte/store";

export const proStepState = writable({
  activeStep: "step1",
});
