<script lang="ts">
  import type { Level } from "../../../types/index";
  import themeStore from "../../../stores/themeStore";
  import Start from "./blocks/Start.svelte";
  import Day from "./blocks/Day.svelte";
  import ExerciseName from "./blocks/ExerciseName.svelte";
  import Session from "./blocks/Session.svelte";
  import Keys from "./blocks/Keys.svelte";
  import CellBlock from "./blocks/CellBlock.svelte";
  import { generateBlocksAndRows } from "./blocks/BlockUtils";
  import programOptions from "../../../stores/programOptionsStore";
  
  export let level: Level;
  let activeOption = "newProgram"; //

  let trainingDays;
  let exercisesPerDay;
  let sessions;
  let programBlocks;

  let blocks = [];
  let rows = [];

  programOptions.subscribe(($programOptions) => {
    console.log("Received updated options: ", $programOptions);
    const { trainingDays, exercisesPerDay, sessions, programBlocks } =
      $programOptions;

    const { blocks: newBlocks, rows: newRows } = generateBlocksAndRows(
      trainingDays,
      exercisesPerDay,
      programBlocks,
      sessions
    );

    blocks = newBlocks;
    rows = newRows;
    console.log("Rows:", rows);
  });
</script>

<div
  class="flex flex-col items-start border rounded-tl-md border-2 bg-bg2"
>
  {#each rows as row}
    <div class="flex flex-row items-start">
      {#each row as block}
        {#if block.type === "Start"}
          <Start label={block.label} />
        {:else if block.type === "Session"}
          <Session label={block.label} />
        {:else if block.type === "Day"}
          <Day label={block.label} />
        {:else if block === "Keys"}
          <Keys />
        {:else if block === "ExerciseName"}
          <ExerciseName />
        {:else if block === "CellBlock"}
          <CellBlock />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
</style>
