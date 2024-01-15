<script lang="ts">
  import { onMount } from "svelte";
  import { proStepState } from "../../../../stores/builderStore";
  import { programNotesStore } from "../../../../utilities/builder/simple/store";

  import SimpleClientOptions from "./options/SimpleClientOptions.svelte";

  let activeStep: string;
  proStepState.subscribe(($proStepState) => {
    activeStep = $proStepState.activeStep;
  });

  const handleNewProgram = () => {
    // Reset the program notes
    programNotesStore.reset();
  };
</script>

<div class="flex flex-row justify-between">
  <div class="flex flex-row items-start custom-border-right">
    <div
      class="flex flex-col items-start justify-center whitespace-nowrap gap-2"
    >
      <span
        class="flex text-start w-full p-2 font-bold text-lg border-b border-accent2 w-full"
        >File</span
      >
      <button
        class="flex text-start w-full px-2 text-gray-400 hover:bg-card"
        on:click={handleNewProgram}
      >
        New
      </button>
      <button class="flex w-full px-2 text-gray-400 hover:bg-card">
        Save
      </button>
      <button class="flex w-full px-2 mr-6 text-gray-400 hover:bg-card">
        Save As
      </button>
      <button class="flex w-full px-2 text-gray-400 hover:bg-card">
        Open
      </button>
      <button class="flex w-full px-2 text-gray-400 hover:bg-card">
        Send
      </button>
    </div>
  </div>
  {#if activeStep === "step1"}
    <SimpleClientOptions />
  {:else if activeStep === "step2"}
    <div>Step 2</div>
  {/if}
</div>
