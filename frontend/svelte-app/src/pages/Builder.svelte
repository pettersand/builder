<script>
  // Builder.svelte
  import BuilderOptions from "../components/builder/BuilderOptions.svelte";
  import MainContent from "../components/builder/MainContent.svelte";
  import NewProgram from "../components/builder/options/NewProgramOptions.svelte";
  import EditProgram from "../components/builder/options/EditProgramOptions.svelte"; 
  import SavedTemplates from "../components/builder/options/SavedTemplatesOptions.svelte";
  import PreMadePrograms from "../components/builder/options/PreMadeProgramsOptions.svelte";
  import NewProgramMain from "../components/builder/main/NewProgramMain.svelte";
  import EditProgramMain from "../components/builder/main/EditProgramMain.svelte";
  import SavedTemplatesMain from "../components/builder/main/SavedTemplatesMain.svelte";
  import PreMadeProgramMain from "../components/builder/main/PreMadeProgramMain.svelte";
  
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
</style>
