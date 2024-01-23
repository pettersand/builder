<script lang="ts">
  import { activeStepStore } from "../../../../../../utilities/builder/simple";

  let activeStep: string;
  $: activeStepStore.subscribe((value) => (activeStep = value));
</script>

<div
  class="flex flex-row w-full justify-evenly custom-border-bottom text-lg font-bold"
>
  <button
    class={`w-full p-1 custom-border-right hover:bg-card ${
      activeStep === "setup" ? "bg-card" : ""
    }`}
    on:click={() => activeStepStore.set("setup")}>1. Setup</button
  >
  <button
    class={`w-full p-1 custom-border-right hover:bg-card ${
      activeStep === "template" ? "bg-card" : ""
    }`}
    on:click={() => activeStepStore.set("template")}>2. Template</button
  >
  <button
    class={`w-full p-1 custom-border-right hover:bg-card ${
      activeStep === "program" ? "bg-card" : ""
    }`}
    on:click={() => activeStepStore.set("program")}>3. Program</button
  >
  <button
    class={`w-full p-1 hover:bg-card ${
      activeStep === "final" ? "bg-card" : ""
    }`}
    on:click={() => activeStepStore.set("final")}>4. Final</button
  >
</div>
