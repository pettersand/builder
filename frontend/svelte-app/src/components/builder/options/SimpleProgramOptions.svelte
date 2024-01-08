<!-- NewProgramOptions.svelte -->
<script lang="ts">
  import programOptions from "../../../stores/programOptionsStore";

  let trainingDays = 1;
  let exercisesPerDay = 6;
  let sessions = 8;
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

<div class="flex flex-row justify-between">


  <!-- Options Container -->
  <div class="flex flex-col w-full items-center">
    <!-- Options Top Row -->
    <div
      class="flex flex-row w-full justify-evenly custom-border-bottom text-lg font-bold"
    >
      <button class="bg-card w-full p-2 custom-border-right hover:bg-card">
        1. Client
      </button>
      <button class="w-full p-2 custom-border-right hover:bg-card">
        2. Template
      </button>
      <button class=" w-full p-2 custom-border-right hover:bg-card">
        3. Program
      </button>
      <button class=" w-full p-2 hover:bg-card"> 4. Edit </button>
    </div>

    <!-- Options bottom container -->
    <div class="flex flex-row w-full justify-center">
      <!-- Template Options -->

      <!-- Custom Setup -->
      <div class="w-1/3 flex flex-col gap-4 p-4 bg-bg">
        <span class="text-start custom-border-bottom text-lg font-bold"
          >Custom Setup</span
        >
        <div class=" space-y-2">
          <!-- Training Days -->
          <div class="flex items-center justify-between">
            <label for="trainingDays">How many unique training days?</label>
            <input
              bind:value={trainingDays}
              id="trainingDays"
              type="number"
              on:input={updateStore}
              class="w-1/3 p-1 text-sm border rounded-md bg-bg2"
            />
          </div>
          <!-- Exercises Per Day -->
          <div class="flex items-center justify-between">
            <label for="exercisesPerDay">How many exercises per day?</label>
            <input
              bind:value={exercisesPerDay}
              id="exercisesPerDay"
              type="number"
              on:input={updateStore}
              class="w-1/3 p-1 text-sm border rounded-md bg-bg2"
            />
          </div>
        </div>
        <div class="flex flex-row justify-center gap-4">
          <button class="font-bold border bg-card p-2 pl-4 pr-4 rounded-xl">
            Duplicate Block
          </button>
        </div>
      </div>
      <div
        class="w-1/3 p-4 bg-bg flex flex-col gap-2 items-center custom-border-right custom-border-left"
      >
        <span class="font-bold">Explore Templates:</span>
        <button>All Templates</button>
        <button>My Templates</button>
        <button>Official Templates</button>
      </div>
      <div class="w-1/3 p-4 bg-bg flex flex-col gap-2 items-center">
        <span class="font-bold">Explore Programs:</span>
        <button>All Programs</button>
        <button>My Programs</button>
        <button>Official Programs</button>
      </div>
    </div>
  </div>
</div>
