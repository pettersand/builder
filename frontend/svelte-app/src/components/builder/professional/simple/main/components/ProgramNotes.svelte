<script lang="ts">
  import { programNotesStore } from "../../../../../../utilities/builder/simple/store";

  let customName = '';
  let focus = '';
  let phase = '';
  let considerations = '';
  let notes = '';

  $: {
    programNotesStore.updateNotes({
      customName,
      focus,
      phase,
      considerations,
      notes,
    });
  }

  const addCustom = () => {
    // Handle the addition of custom data
    // For now, it just log the values
    console.log({ customName, focus, phase, considerations, notes });
  };
</script>

<div class="flex flex-col space-y-4">
  <div class="flex items-center gap-2">
    <label for="customName">Custom Name:</label>
    <input
      type="text"
      id="customName"
      bind:value={customName}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="focus">Focus:</label>
    <input
      type="text"
      id="focus"
      bind:value={focus}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="phase">Phase:</label>
    <input
      type="text"
      id="phase"
      bind:value={phase}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="considerations">Considerations:</label>
    <input
      type="text"
      id="considerations"
      bind:value={considerations}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="notes">Program Notes:</label>
    <textarea id="notes" bind:value={notes} class="p-2 border rounded-lg"
    ></textarea>
  </div>

  <button
    class="border-4 rounded-lg border-accent2 p-2 font-bold w-1/3"
    on:click={addCustom}
  >
    Add Custom
  </button>
</div>
