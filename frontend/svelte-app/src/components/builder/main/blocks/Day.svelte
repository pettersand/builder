<!-- src/components/builder/main/blocks/DayOrExercise.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import themeStore from "../../../../stores/themeStore";

  // Export the label prop
  export let label: string = "Day";

  onMount(() => {
    console.log(`Label is: ${label}`);
  });
</script>

<div
  class={`day-or-exercise-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  <!-- Use the label prop here -->
  {label}
</div>

<style>
  .day-or-exercise-block {
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-weight: bold;
  }
</style>
