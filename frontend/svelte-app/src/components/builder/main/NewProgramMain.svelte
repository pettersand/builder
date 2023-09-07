<script lang="ts">
  import type { Level } from "../../../types/index";
  import themeStore from "../../../stores/themeStore";
  import Start from "./blocks/Start.svelte";
  import Day from "./blocks/Day.svelte";
  import Exercise from "./blocks/Exercise.svelte";
  import Week from "./blocks/Week.svelte";
  import Keys from "./blocks/Keys.svelte";
  import CellBlock from "./blocks/CellBlock.svelte";
  import { generateBlocks } from "./blocks/BlockUtils";
  import programOptions from "../../../stores/programOptionsStore";

  let activeOption = "newProgram"; //
  export let level: Level;

  let blocks = [];

  programOptions.subscribe(($programOptions) => {
    console.log("Received updated options: ", $programOptions);
    const { trainingDays, exercisesPerDay, sessionsPerWeek, weeks } =
      $programOptions;
    blocks = generateBlocks(
      trainingDays,
      exercisesPerDay,
      sessionsPerWeek,
      weeks
    );
  });
  console.log(blocks);
</script>

<div class="main-content">
  <!-- Add your main content for New Program here -->

  <!-- Render Program Layout -->
  <div class="block-container flex flex-row">
    {#each blocks as block}
      {#if block === "Start"}
        <Start />
      {:else if block === "Week"}
        <Week />
      {:else if block === "Day"}
        <Day label={block.label} />
      {:else if block === "Exercise"}
        <Exercise />
      {:else if block === "Keys"}
        <Keys />
      {:else if block === "CellBlock"}
        <CellBlock />
      {/if}
    {/each}
  </div>
</div>

<style>
  /* Add styles for the main content component here */
</style>
