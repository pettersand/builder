<!-- src/components/builder/main/blocks/Exercise.svelte -->
<script lang="ts">
  import { handleKeyboardEvent } from "../../../../utilities/modalUtilities";
  import themeStore from "../../../../stores/themeStore";
  let exerciseName = ""; // Local state for the exercise name

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    exerciseName = target.value;
  }

  function handleKeydown(event: KeyboardEvent) {
    handleKeyboardEvent(
      event,
      () => {},
      () => {
        const target = event.target as HTMLInputElement;
        target.blur();
      }
    );
  }
</script>

<input
  class="w-52 h-full text-left bg-contrast2 text-headline border-r border-l border-b border-headline"
  type="text"
  placeholder="Add Exercise"
  value={exerciseName}
  on:input={handleInput}
  on:keydown={handleKeydown}
/>

<style>
</style>
