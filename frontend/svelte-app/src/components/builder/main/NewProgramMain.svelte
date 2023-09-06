<script lang="ts">
  import type { Level } from "../../../types/index";
  import themeStore from "../../../stores/themeStore";
  import Start from "./blocks/Start.svelte";
  import Day from "./blocks/Day.svelte";
  import Exercise from "./blocks/Exercise.svelte";
  import Week from "./blocks/Week.svelte";
  import Keys from "./blocks/Keys.svelte";
  import CellBlock from "./blocks/CellBlock.svelte";

  let activeOption = "newProgram"; //
  export let level: Level;
  let uniqueTrainingDays = 1;
</script>

<div class="main-content">
  <!-- Add your main content for New Program here -->
  <h2>New Program Main Content</h2>
  <p>This is the main content for the New Program option.</p>

  <!-- Render the Start block -->
  <div class="flex flex-row">
    <Start />
    <Week />
  </div>
  <div class="flex flex-row">
    <Day />
    <Keys />
  </div>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <Exercise />
      <CellBlock />  
    </div>
    <div class="flex flex-row">
      <Exercise />
      <CellBlock />  
    </div>
  </div>
</div>

<style>
  /* Add styles for the main content component here */
</style>
