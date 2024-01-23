<script lang="ts">
  import { activeStepStore } from "../../../../utilities/builder/simple";

  import SimpleClientMain from "./main/SimpleClientMain.svelte";
  import SimpleTemplateMain from "./main/SimpleTemplateMain.svelte";

  let activeStep: string;
  $: activeStepStore.subscribe((value) => (activeStep = value));
</script>

<div class="flex w-full h-full justify-between">
  {#if activeStep === "setup"}
    <SimpleClientMain />
  {:else if activeStep === "template"}
    <SimpleTemplateMain />
  {:else if activeStep === "program"}
    <div>Program</div>
  {:else if activeStep === "final"}
    <div>Final</div>
  {:else}
    <div>Something went wrong</div>
  {/if}
</div>
