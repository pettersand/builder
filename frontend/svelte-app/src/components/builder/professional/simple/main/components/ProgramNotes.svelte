<!-- ProgramNotes.svelte -->

<script lang="ts">
  import { onDestroy } from "svelte";
  import { programNotesStore } from "../../../../../../utilities/builder/simple/store";

  let programNotes = {
    customName: "",
    focus: "",
    phase: "",
    considerations: "",
    notes: "",
  };

  const unsubscribe = programNotesStore.subscribe((storedData) => {
    programNotes = { ...storedData };
  });

  // Reactive statement to update store
  function handleInput(event, field) {
    programNotes[field] = event.target.value;
    programNotesStore.updateNotes(programNotes);
  }

  onDestroy(() => {
    unsubscribe();
  });

  const addCustom = () => {
    console.log(programNotes);
  };
</script>

<div class="flex flex-col space-y-4">
  <div class="flex items-center gap-2">
    <label for="customName">Custom Name:</label>
    <input
      type="text"
      id="customName"
      bind:value={programNotes.customName}
      on:input={(e) => handleInput(e, "customName")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="focus">Focus:</label>
    <input
      type="text"
      id="focus"
      bind:value={programNotes.focus}
      on:input={(e) => handleInput(e, "focus")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="phase">Phase:</label>
    <input
      type="text"
      id="phase"
      bind:value={programNotes.phase}
      on:input={(e) => handleInput(e, "phase")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="considerations">Considerations:</label>
    <input
      type="text"
      id="considerations"
      bind:value={programNotes.considerations}
      on:input={(e) => handleInput(e, "considerations")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="notes">Program Notes:</label>
    <textarea
      id="notes"
      bind:value={programNotes.notes}
      on:input={(e) => handleInput(e, "notes")}
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
