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
  import BaseModal from "../components/BaseModal.svelte";
  import globalStore from "../stores/globalStore";
  import themeStore from "../stores/themeStore";
  import setCurrentPage from "../stores/globalStore";
  import type { Level } from "../types/index";
  import type { MainComponentMap, OptionsComponentMap } from "../types/index";
  import {
    toggleModal,
    handleKeyboardEvent,
    handleClickOutside,
  } from "../components/UtilityFunctions";

  let showModal = false;
  let activeOption: string = "newProgram"; // Default active option
  let selectedLevel: Level = "Beginner";

  const optionToMainComponent: MainComponentMap = {
    newProgram: NewProgramMain,
    editProgram: EditProgramMain,
    savedTemplates: SavedTemplatesMain,
    preMadePrograms: PreMadeProgramMain,
  };

  const optionToOptionsComponent: OptionsComponentMap = {
    newProgram: NewProgramOptions,
    editProgram: EditProgramOptions,
    savedTemplates: SavedTemplatesOptions,
    preMadePrograms: PreMadeProgramsOptions,
  };

  const setActiveOption = (option: string) => {
    activeOption = option;
    if (option === "newProgram") {
      showModal = true;
    }
  };

  const onClose = () => {
    showModal = false;
  };

  const onConfirm = () => {
    // Add your confirm logic here
    // For example, you might want to set the selected level
    globalStore.setLevel(selectedLevel);
    showModal = false;
  };

  // Function to capitalize the first letter of each word in a string
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onMount(() => {
    globalStore.setCurrentPage("Builder"); // Set the current page to 'Builder'
  });
</script>

<main class="flex flex-grow flex-col h-screen">
  <div
    class={`flex rounded-md p-2 ${
      $themeStore === "dark"
        ? "bg-dark-card text-dark-text"
        : "bg-light-card2 text-light-text"
    }`}
  >
    <nav class="flex flex-col items-start pr-4 text-left">
      {#each ["newProgram", "editProgram", "savedTemplates", "preMadePrograms"] as option}
        <button
          on:click={() => setActiveOption(option)}
          class={`p-2 transition duration-300 ease-in-out rounded-md hover:border hover:border-opacity-50 ${
            activeOption === option
              ? $themeStore === "dark"
                ? "bg-opacity-30 bg-dark-primary2"
                : "bg-opacity-30 bg-light-primary3"
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

  <!-- Modal HTML structure -->
  {#if showModal}
    <BaseModal modalContent="Select Level" {onClose} {onConfirm}>
      {#each ["Beginner", "Intermediate", "Expert"] as level}
        <label class="inline-flex items-center mt-3">
          <input
            type="radio"
            class="form-radio"
            name="level"
            bind:group={selectedLevel}
            value={level}
          />
          <span class="ml-2">{level}</span>
        </label>
      {/each}
    </BaseModal>
  {/if}
</main>

<!-- Modal styles -->
<style>
  .modal {
    position: relative;
    border-radius: 8px;
  }
</style>
