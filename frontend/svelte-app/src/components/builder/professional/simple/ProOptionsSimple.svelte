<script lang="ts">
  import { onMount } from "svelte";
  import { proStepState } from "../../../../stores/builderStore";

  import SimpleClientOptions from "./options/SimpleClientOptions.svelte";

  let activeStep: string;
  proStepState.subscribe(($proStepState) => {
    activeStep = $proStepState.activeStep;
  });
</script>

<div class="flex flex-row justify-between">
  <div class="flex flex-row items-start custom-border-right p-4">
    <div
      class="flex flex-col items-start justify-center whitespace-nowrap gap-2 pr-6"
    >
      <span class="font-bold text-lg border-b border-accent2 w-full">File</span>
      <button class="text-gray-400"> New </button>
      <button class="text-gray-400"> Save </button>
      <button class="text-gray-400"> Save As </button>
      <button class="text-gray-400"> Open </button>
      <button class="text-gray-400"> Send </button>
    </div>
  </div>
  {#if activeStep === "step1"}
    <SimpleClientOptions />
  {:else if activeStep === "step2"}
    <div>Step 2</div>
  {/if}
</div>
