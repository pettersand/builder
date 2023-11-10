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
  class={`w-52 h-8 pl-2 text-left border ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  <!-- Use the label prop here -->
  {label}
</div>

<style>

</style>
