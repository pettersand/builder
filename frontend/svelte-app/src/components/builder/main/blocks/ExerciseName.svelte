<!-- src/components/builder/main/blocks/Exercise.svelte -->
<script lang="ts">
  import { handleKeyboardEvent } from "../../../UtilityFunctions";
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
  class={`exercise-input ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-card2 text-light-text border-light-bg2"
  }`}
  type="text"
  placeholder="Add Exercise"
  value={exerciseName}
  on:input={handleInput}
  on:keydown={handleKeydown}
/>

<style>
  .exercise-input {
    width: 200px;
    height: 40px;
    padding-left: 5px;
    text-align: flex-start;
    border: 1px solid;
    font-weight: bold;
  }
</style>
