// user/store.ts

import { writable } from "svelte/store";
import type { User } from "./types";

function createUserStore() {
    const { subscribe, set, update } = writable<User>({ isLoggedIn: false, roles: [], userId: "" });

    return { 
        subscribe,
        set,
        updateUser: (userData: Partial<User>) => {
            update(current => ({ ...current, ...userData }));
        },
        // Additional methods here
    };
}

export const newUserStore = createUserStore();