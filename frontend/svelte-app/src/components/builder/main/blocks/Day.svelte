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
  class="w-52 h-full pl-2 items-center text-left font-bold border-l border-r border-b border-headline bg-contrast"
>
  {label}
</div>

<style>
</style>
