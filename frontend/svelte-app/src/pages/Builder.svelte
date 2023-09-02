<!-- Builder.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import MainContent from "../components/builder/MainContent.svelte";
  import OptionsContent from "../components/builder/OptionsContent.svelte";
  import NewProgramOptions from "../components/builder/options/NewProgramOptions.svelte";
  import EditProgramOptions from "../components/builder/options/EditProgramOptions.svelte";
  import SavedTemplatesOptions from "../components/builder/options/SavedTemplatesOptions.svelte";
  import PreMadeProgramsOptions from "../components/builder/options/PreMadeProgramsOptions.svelte";
  import NewProgramMain from "../components/builder/main/NewProgramMain.svelte";
  import EditProgramMain from "../components/builder/main/EditProgramMain.svelte";
  import SavedTemplatesMain from "../components/builder/main/SavedTemplatesMain.svelte";
  import PreMadeProgramMain from "../components/builder/main/PreMadeProgramMain.svelte";
  import themeStore from "../stores/themeStore";

  let activeOption: string = "newProgram"; // Default active option

  type ComponentMap = {
    [key: string]:
      | typeof NewProgramMain
      | typeof EditProgramMain
      | typeof SavedTemplatesMain
      | typeof PreMadeProgramMain;
  };

  const optionToMainComponent: ComponentMap = {
    newProgram: NewProgramMain,
    editProgram: EditProgramMain,
    savedTemplates: SavedTemplatesMain,
    preMadePrograms: PreMadeProgramMain,
  };

  const optionToOptionsComponent: ComponentMap = {
    newProgram: NewProgramOptions,
    editProgram: EditProgramOptions,
    savedTemplates: SavedTemplatesOptions,
    preMadePrograms: PreMadeProgramsOptions,
  };

  const setActiveOption = (option: string) => {
    activeOption = option;
  };

  // Function to capitalize the first letter of each word in a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>

<main class="flex flex-grow flex-col h-screen">
  <div
    class={`flex p-4 ${
      $themeStore === "dark"
        ? "bg-dark-card text-dark-text"
        : "bg-light-card2 text-light-text"
    }`}
  >
    <nav class="flex flex-col items-start pr-4 text-left">
      {#each ["newProgram", "editProgram", "savedTemplates", "preMadePrograms"] as option}
        <button
          on:click={() => (activeOption = option)}
          class={`p-2 transition duration-300 ease-in-out rounded-md hover:border hover:border-opacity-50 ${
            activeOption === option
              ? $themeStore === "dark"
                ? "bg-opacity-30 bg-dark-primary"
                : "bg-opacity-30 bg-light-primary"
              : ""
          }`}
        >
          {capitalizeFirstLetter(option.replace(/([A-Z])/g, " $1"))}
        </button>
      {/each}
    </nav>
    <OptionsContent bind:activeOption {optionToOptionsComponent} />
  </div>
  <MainContent {activeOption} {optionToMainComponent} />
</main>

<style>
  /* Add your styles here */
</style>
