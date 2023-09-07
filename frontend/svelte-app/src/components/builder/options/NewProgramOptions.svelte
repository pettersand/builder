<!-- NewProgramOptions.svelte -->
<script lang="ts">
  import type { Level } from "../../../types/index"; // Add this line
  let activeOption = "newProgram"; // Default active option
  export let level: Level; // Use the imported Level type
  import themeStore from "../../../stores/themeStore";
  import programOptions from "../../../stores/programOptionsStore";

  let trainingDays = 0;
  let exercisesPerDay = 0;
  let sessionsPerWeek = 0;
  let weeks = 0;

  // Function to update the store
  function updateStore() {
    console.log("Updating store with: ", {
      trainingDays,
      exercisesPerDay,
      sessionsPerWeek,
      weeks,
    });
    programOptions.set({
      trainingDays,
      exercisesPerDay,
      sessionsPerWeek,
      weeks,
    });
  }
</script>

{#if level === "Beginner"}
  <div class="flex flex-row justify-between">
    <!-- Custom Setup -->
    <div
      class={`w-1/4 p-4 ${
        $themeStore === "dark"
          ? "bg-dark-card border-dark-text"
          : "bg-light-card2 border-light-text"
      }`}
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
            class={`w-1/3 p-1 text-xs border rounded-md ${
              $themeStore === "dark"
                ? "bg-dark-primary3 opacity-50 border-dark-primary"
                : "bg-light-card opacity-50 border-light-primary"
            }`}
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
            class={`w-1/3 p-1 text-xs border rounded-md ${
              $themeStore === "dark"
                ? "bg-dark-primary3 opacity-50 border-dark-primary"
                : "bg-light-card opacity-50 border-light-primary"
            }`}
          />
        </div>
        <!-- Sessions Per Week -->
        <div class="flex items-center justify-between">
          <label for="sessionsPerWeek" class="text-xs"
            >How many sessions per week?</label
          >
          <input
            bind:value={sessionsPerWeek}
            id="sessionsPerWeek"
            type="number"
            on:input={updateStore}
            class={`w-1/3 p-1 text-xs border rounded-md ${
              $themeStore === "dark"
                ? "bg-dark-primary3 opacity-50 border-dark-primary"
                : "bg-light-card opacity-50 border-light-primary"
            }`}
          />
        </div>
        <!-- Weeks -->
        <div class="flex items-center justify-between">
          <label for="weeks" class="text-xs">How many weeks?</label>
          <input
            bind:value={weeks}
            id="weeks"
            type="number"
            on:input={updateStore}
            class={`w-1/3 p-1 text-xs border rounded-md ${
              $themeStore === "dark"
                ? "bg-dark-primary3 opacity-50 border-dark-primary"
                : "bg-light-card opacity-50 border-light-primary"
            }`}
          />
        </div>
      </div>
    </div>
    <!-- Templates -->
    <div
      class={`w-1/4 p-4 ${
        $themeStore === "dark"
          ? "bg-dark-card border-dark-text"
          : "bg-light-card2 border-light-text"
      }`}
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">
        Templates
      </h2>
      <!-- Content for Templates -->
    </div>
    <!-- Exercise Picker -->
    <div
      class={`w-1/4 p-4 ${
        $themeStore === "dark"
          ? "bg-dark-card border-dark-text"
          : "bg-light-card2 border-light-text"
      }`}
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">
        Exercise Picker
      </h2>
      <!-- Content for Exercise Picker -->
    </div>
    <!-- Options -->
    <div
      class={`w-1/4 p-4 ${
        $themeStore === "dark"
          ? "bg-dark-card border-dark-text"
          : "bg-light-card2 border-light-text"
      }`}
    >
      <h2 class="text-center text-sm border-b-2 border-opacity-50">Options</h2>
      <!-- Content for Options -->
    </div>
  </div>
{:else if level === "Intermediate"}
  <!-- Intermediate content here -->
  <h1>INTERMEDIATE</h1>
{:else}
  <!-- Expert content here -->
  <h1>EXPERT</h1>
{/if}
