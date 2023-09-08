// programOptionsStore.ts
import { writable } from 'svelte/store';

const programOptions = writable({
  trainingDays: 0,
  exercisesPerDay: 0,
  programBlocks: 0,
  sessions: 0
});

export default programOptions;