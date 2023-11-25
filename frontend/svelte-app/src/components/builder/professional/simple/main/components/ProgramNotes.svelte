<script lang="ts">
  let customName = "";
  let focus = "";
  let phase = "";
  let considerations = "";
  let programNotes = "";

  const addCustom = () => {
    // Handle the addition of custom data
    // For now, we'll just log the values
    console.log({ customName, focus, phase, considerations, programNotes });
    // Here you can also add logic to store these values in localStorage or a store
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
    <label for="programNotes">Program Notes:</label>
    <textarea
      id="programNotes"
      bind:value={programNotes}
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
