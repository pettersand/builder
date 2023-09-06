<!-- NewProgramOptions.svelte -->
<script lang="ts">
  import type { Level } from "../../../types/index"; // Add this line
  let activeOption = "newProgram"; // Default active option
  export let level: Level; // Use the imported Level type
  import themeStore from "../../../stores/themeStore";
  import programOptions from "../../../stores/programOptionsStore";

  let trainingDays;
  let exercisesPerDay;
  let sessionsPerWeek;
  let weeks;

  // Function to update the store
  function updateStore() {
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
    {#each ["Custom Setup", "Templates", "Exercise Picker", "Options"] as title}
      <div
        class={`w-1/4 p-4 ${
          $themeStore === "dark"
            ? "bg-dark-card border-dark-text"
            : "bg-light-card2 border-light-text"
        }`}
      >
        <h2 class="text-center text-sm border-b-2 border-opacity-50">
          {title}
        </h2>
        {#if title === "Custom Setup"}
          <div class="mt-2 space-y-2">
            {#each [{ label: "How many unique training days?", id: "trainingDays", bindValue: trainingDays }, { label: "How many exercises per day?", id: "exercisesPerDay", bindValue: exercisesPerDay }, { label: "How many sessions per week?", id: "sessionsPerWeek", bindValue: sessionsPerWeek }, { label: "How many weeks?", id: "weeks", bindValue: weeks }] as field}
              <div class="flex items-center justify-between">
                <label for={field.id} class="text-xs">{field.label}</label>
                <input
                  bind:value={field.bindValue}
                  id={field.id}
                  type="number"
                  on:input={updateStore}
                  class={`w-1/3 p-1 text-xs border rounded-md ${
                    $themeStore === "dark"
                      ? "bg-dark-primary3 opacity-50 border-dark-primary"
                      : "bg-light-card opacity-50 border-light-primary"
                  }`}
                />
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
{:else if level === "Intermediate"}
  <!-- Intermediate content here -->
  <h1>INTERMEDIATE</h1>
{:else}
  <!-- Expert content here -->
  <h1>EXPERT</h1>
{/if}
