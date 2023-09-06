<script lang="ts">
  import type { Level } from "../../../types/index";
  import themeStore from "../../../stores/themeStore";
  import Start from "./blocks/Start.svelte";
  import Day from "./blocks/Day.svelte";
  import Exercise from "./blocks/Exercise.svelte";

  let activeOption = "newProgram"; //
  export let level: Level;
  let uniqueTrainingDays = 1;
  
</script>

<div class="main-content">
  <!-- Add your main content for New Program here -->
  <h2>New Program Main Content</h2>
  <p>This is the main content for the New Program option.</p>

  <!-- Render the Start block -->
  <Start />
  <Day />
  <div class="flex flex-col">
    <Exercise />
    <Exercise />
  </div>
  
</div>

<style>
  /* Add styles for the main content component here */
</style>
