<!-- ProgramNotes.svelte -->

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { notesStore, updateNotes } from "../../../../../../utilities/program/simple/substores/notesStore";
  import type { ProgramNotes } from "../../../../../../utilities/program/simple/types";
  

  /**
   * * Component to display and edit program notes in step 1 of the builder process.
   * TODO: Secure the data handling of dual cases - input vs stores
   * Implement once the program stores and handlers are complete
   */

  // Subscribes to programNotesStore and updates local state
  let programNotes: ProgramNotes;
  const unsubscribe = notesStore.subscribe(value => programNotes = value);

  onDestroy(() => {
    unsubscribe();
  });

  const addCustom = () => {
    console.log("Add custom note type");
  };
</script>

<div class="flex flex-col space-y-4">
  <div class="flex items-center gap-2">
    <label for="customName">Custom Name:</label>
    <input
      type="text"
      id="customName"
      bind:value={programNotes.customName}
      on:input={() => updateNotes({ customName: programNotes.customName })}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="focus">Focus:</label>
    <input
      type="text"
      id="focus"
      bind:value={programNotes.focus}
      on:input={() => updateNotes({ focus: programNotes.focus })}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="phase">Phase:</label>
    <input
      type="text"
      id="phase"
      bind:value={programNotes.phase}
      on:input={() => updateNotes({ phase: programNotes.phase })}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="considerations">Considerations:</label>
    <input
      type="text"
      id="considerations"
      bind:value={programNotes.considerations}
      on:input={() => updateNotes({ considerations: programNotes.considerations })}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="notes">Program Notes:</label>
    <textarea
      id="notes"
      bind:value={programNotes.notes}
      on:input={() => updateNotes({ notes: programNotes.notes })}
      class="p-2 border rounded-lg"
    ></textarea>
  </div>

  <button
    class="border-4 rounded-lg border-accent2 p-2 font-bold w-1/3"
    on:click={addCustom}
  >
    Add Custom
  </button>
</div>
