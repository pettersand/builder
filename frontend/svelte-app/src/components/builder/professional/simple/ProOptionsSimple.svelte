<script lang="ts">
  import { onMount } from "svelte";
  import { proStepState } from "../../../../stores/builderStore";
  import {
    mainProgramStore,
    getCurrentProgramData,
  } from "../../../../utilities/program/simple/store";
  import { saveProgram } from "../../../../utilities/program/simple/functions";
  import { modalStore } from "../../../../utilities/modal";
  import { saveStatusStore } from "../../../../utilities/global/store";
  import UnsavedPrompt from "./UnsavedPrompt.svelte";
  import SimpleClientOptions from "./options/SimpleClientOptions.svelte";

  let activeStep: string;
  proStepState.subscribe(($proStepState) => {
    activeStep = $proStepState.activeStep;
  });

  let saveStatus = "Loading...";

  $: {
    saveStatusStore.subscribe((status) => {
      saveStatus = status.programData;
    });
  }

  const handleNewProgram = () => {
    if (saveStatus === "Changes Detected") {
      modalStore.openModal(UnsavedPrompt);
    } else {
      mainProgramStore.resetProgram();
    }
  };

  const handleSave = () => {
    const programData = getCurrentProgramData();
    saveProgram(programData);
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
        class="flex w-full px-2 hover:bg-card"
        on:click={handleNewProgram}
      >
        New
      </button>
      <button
        class="flex w-full px-2 hover:bg-card"
        on:click={handleSave}
      >
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
