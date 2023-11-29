<script lang="ts">
  import { onMount } from "svelte";
  import { proStepState } from "../../../../stores/builderStore";

  import FileOptions from "../../options/FileOptions.svelte";
  import SimpleClientOptions from "./options/SimpleClientOptions.svelte";

  let activeStep: string;
  proStepState.subscribe(($proStepState) => {
    activeStep = $proStepState.activeStep;
  });
</script>

<div class="flex flex-row justify-between">
  <FileOptions />
  {#if activeStep === "step1"}
    <SimpleClientOptions />
  {:else if activeStep === "step2"}
    <div>Step 2</div>
  {/if}
</div>
