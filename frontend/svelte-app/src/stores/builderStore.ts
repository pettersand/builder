// builderStore.ts

import { writable } from "svelte/store";

export const builderState = writable({
  activeOption: "newProgram",
});
