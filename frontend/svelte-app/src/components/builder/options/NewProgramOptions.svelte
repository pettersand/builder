<!-- NewProgramOptions.svelte -->
<script lang="ts">
  import type { Level } from "../../../types/index";
  let activeOption = "newProgram"; // Default active option
  export let level: Level; // Use the imported Level type
  import themeStore from "../../../stores/themeStore";
  import programOptions from "../../../stores/programOptionsStore";

  let trainingDays = 1;
  let exercisesPerDay = 6;
  let sessions = 10;
  let programBlocks = 1;

  // Function to update the store
  function updateStore() {
    console.log("Updating store with: ", {
      trainingDays,
      exercisesPerDay,
      programBlocks,
      sessions,
    });
    programOptions.set({
      trainingDays,
      exercisesPerDay,
      programBlocks,
      sessions,
    });
  }
</script>

{#if level === "Beginner"}
  <div class="flex flex-row justify-between">
    <!-- Custom Setup -->
    <div
      class="w-1/4 p-4 bg-bg"
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">
        Custom Setup
      </h2>
      <div class="mt-2 space-y-2">
        <!-- Training Days -->
        <div class="flex items-center justify-between">
          <label for="trainingDays" class="text-xs"
            >How many unique training days?</label
          >
          <input
            bind:value={trainingDays}
            id="trainingDays"
            type="number"
            on:input={updateStore}
            class="w-1/3 p-1 text-xs border rounded-md" 
          />
        </div>
        <!-- Exercises Per Day -->
        <div class="flex items-center justify-between">
          <label for="exercisesPerDay" class="text-xs"
            >How many exercises per day?</label
          >
          <input
            bind:value={exercisesPerDay}
            id="exercisesPerDay"
            type="number"
            on:input={updateStore}
            class="w-1/3 p-1 text-xs border rounded-md" 
          />
        </div>
      </div>
    </div>
    <!-- Templates -->
    <div
      class="w-1/4 p-4 bg-bg"
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">
        Templates
      </h2>
      <span>Browse Official Templates</span>
      <br />
      <span>Browse Programs</span>
      <br />
      <span>Saved Templates</span>
      <br />
      <span>Saved Programs</span>
    </div>
    <!-- Exercise Picker -->
    <div
      class="w-1/4 p-4 bg-bg"
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">
        Exercise Picker
      </h2>
      <span>Body Part</span>
      <br />
      <span>Equipment</span>
      <br />
      <span>Push/Pull</span>
      <br />
      <span>Box for Options</span>
    </div>
    <!-- Options -->
    <div
      class="w-1/4 p-4 bg-bg"
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">Options</h2>
      <span>Save Program</span>
      <br />
      <span>Activate Program</span>
      <br />
      <span>Send Program</span>
      <br />
      <span>Box for Options</span>
    </div>
  </div>
{:else if level === "Intermediate"}
  <!-- Intermediate content here -->
  <h1>INTERMEDIATE</h1>
{:else}
  <!-- Expert content here -->
  <h1>EXPERT</h1>
{/if}
