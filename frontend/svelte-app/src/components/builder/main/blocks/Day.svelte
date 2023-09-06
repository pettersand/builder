<!-- src/components/builder/main/blocks/DayOrExercise.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`day-or-exercise-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  <b>Day 1</b>
</div>

<style>
  .day-or-exercise-block {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
  }
</style>
