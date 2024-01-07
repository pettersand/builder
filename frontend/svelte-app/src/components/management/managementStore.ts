// managementStore.ts

import { writable } from "svelte/store";

export const managementState = writable({
  activeOption: "dashboard",
});
