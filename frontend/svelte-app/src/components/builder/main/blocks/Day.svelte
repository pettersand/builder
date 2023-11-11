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
  class="w-52 h-full pl-2 pt-1 items-center text-left font-bold border-r border-t border-black bg-contrast"
>
  {label}
</div>

<style>
</style>
