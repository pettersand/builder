<script>
  // Builder.svelte
  import BuilderOptions from "../components/builder/BuilderOptions.svelte";
  import NewProgram from "../components/builder/NewProgram.svelte";
  import EditProgram from "../components/builder/EditProgram.svelte"; // Import the NewProgram component
  import SavedTemplates from "../components/builder/SavedTemplates.svelte";
  import PreMadePrograms from "../components/builder/PreMadePrograms.svelte";
  let activeOption = "newProgram"; // Default active option

  // Map of option to corresponding component
  const optionToComponent = {
    newProgram: NewProgram,
    editProgram: EditProgram,
    savedTemplates: SavedTemplates, 
    preMadePrograms: PreMadePrograms,
  };
</script>

<main class="flex">
  <BuilderOptions bind:activeOption />

  <div class="horizontal-options">
    <!-- Render the component based on the active option -->
    {#if activeOption in optionToComponent}
      <svelte:component this={optionToComponent[activeOption]} />
    {/if}
  </div>
</main>

<style>
  /* Add styles for the horizontal options container here */
  .horizontal-options {
    /* Your styles here */
  }
</style>
