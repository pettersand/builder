// programOptionsStore.ts
import { writable } from 'svelte/store';

const programOptions = writable({
  trainingDays: 0,
  exercisesPerDay: 0,
  sessionsPerWeek: 0,
  weeks: 0
});

export default programOptions;