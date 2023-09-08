<script lang="ts">
  import type { Level } from "../../../types/index";
  import themeStore from "../../../stores/themeStore";
  import Start from "./blocks/Start.svelte";
  import Day from "./blocks/Day.svelte";
  import ExerciseName from "./blocks/ExerciseName.svelte";
  import Week from "./blocks/Week.svelte";
  import Keys from "./blocks/Keys.svelte";
  import CellBlock from "./blocks/CellBlock.svelte";
  import { generateBlocksAndRows } from "./blocks/BlockUtils";
  import programOptions from "../../../stores/programOptionsStore";

  let activeOption = "newProgram"; //
  export let level: Level;

  let trainingDays;
  let exercisesPerDay;
  let sessionsPerWeek;
  let weeks;

  let blocks = [];
  let rows = [];

  programOptions.subscribe(($programOptions) => {
    console.log("Received updated options: ", $programOptions);
    const { trainingDays, exercisesPerDay, sessionsPerWeek, weeks } =
      $programOptions;

    const { blocks: newBlocks, rows: newRows } = generateBlocksAndRows(
      trainingDays,
      exercisesPerDay,
      sessionsPerWeek,
      weeks
    );

    blocks = newBlocks;
    rows = newRows;
    console.log("Rows:", rows)
  });

  console.log(blocks);
  console.log(rows);
  console.log("Rows:", rows);
</script>

<div class="main-content">
  {#each rows as row}
    <div class="block-row">
      {#each row as block}
        {#if block === 'Start'}
          <Start />
        {:else if block === 'Week'}
          <Week />
        {:else if block.type === 'Day'}
          <Day label={block.label} />
        {:else if block === 'Keys'}
          <Keys />
        {:else if block === 'ExerciseName'}
          <ExerciseName />
        {:else if block === 'CellBlock'}
          <CellBlock />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .block-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
</style>