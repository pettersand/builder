// goals/store.ts

// goals/store.ts
import { writable } from "svelte/store";
import type { Goal } from "./types";

function createGoalStore() {
  const { subscribe, set, update } = writable<Goal[]>(getInitialGoals());

  function getInitialGoals(): Goal[] {
    const storedGoals = sessionStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  }

  return {
    subscribe,
    set,
    addGoal: (newGoal: Goal) => {
      update(goals => {
        const updatedGoals = [...goals, newGoal];
        sessionStorage.setItem("goals", JSON.stringify(updatedGoals));
        return updatedGoals;
      });
    },
    // Additional methods like removeGoal, updateGoal, etc., can be added here.
  };
}

export const goalsStore = createGoalStore();