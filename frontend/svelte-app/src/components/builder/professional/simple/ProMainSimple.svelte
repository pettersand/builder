<script lang="ts">
  import { onMount } from "svelte";
  import { proStepState } from "../../../../stores/builderStore";

  import SimpleClientMain from "./main/SimpleClientMain.svelte";

  let activeStep: string;
  proStepState.subscribe(($proStepState) => {
    activeStep = $proStepState.activeStep;
  });
</script>

<div class="flex w-full h-full justify-between">
  {#if activeStep === "step1"}
    <SimpleClientMain />
  {/if}
</div>
