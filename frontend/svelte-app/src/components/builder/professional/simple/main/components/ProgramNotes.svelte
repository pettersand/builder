<!-- ProgramNotes.svelte -->

<script lang="ts">
  import { onDestroy } from "svelte";
  import { programStore } from "../../../../../../utilities/builder/simple/store";

  let customName = "";
  let focus = "";
  let phase = "";
  let considerations = "";
  let notes = "";

  // Subscribe to the store and handle unsubscription
  const unsubscribe = programStore.subscribe((storedData) => {
    if (storedData && storedData.programData && storedData.programData.programNotes) {
      ({ customName, focus, phase, considerations, notes } = storedData.programData.programNotes);
    }
  });

  // Update store when input values change
  function handleInput(event, field) {
    programStore.updateProgram({
      programData: {
        programNotes: {
          ...programStore.get().programData.programNotes,
          [field]: event.target.value
        }
      }
    });
  }

  onDestroy(() => {
    unsubscribe();
  });

  const addCustom = () => {
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
      on:input={(e) => handleInput(e, "customName")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="focus">Focus:</label>
    <input
      type="text"
      id="focus"
      bind:value={focus}
      on:input={(e) => handleInput(e, "focus")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex items-center gap-2">
    <label for="phase">Phase:</label>
    <input
      type="text"
      id="phase"
      bind:value={phase}
      on:input={(e) => handleInput(e, "phase")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="considerations">Considerations:</label>
    <input
      type="text"
      id="considerations"
      bind:value={considerations}
      on:input={(e) => handleInput(e, "considerations")}
      class="p-2 border rounded-lg"
    />
  </div>

  <div class="flex flex-col">
    <label for="notes">Program Notes:</label>
    <textarea
      id="notes"
      bind:value={notes}
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
