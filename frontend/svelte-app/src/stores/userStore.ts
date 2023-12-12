import { writable } from "svelte/store";
import type { UserType } from "../types";

export const user = writable<UserType>({
  isLoggedIn: false,
  roles: null,
});

