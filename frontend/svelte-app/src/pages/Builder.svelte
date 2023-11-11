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
  import modalStore from "../stores/modalStore";
  import { builderState } from "../stores/builderStore";
  import type { Level } from "../types/index";
  import type { MainComponentMap, OptionsComponentMap } from "../types/index";

  let showModal: boolean;
  let modalType: string;
  let modalContent: string;

  modalStore.subscribe((state) => {
    showModal = state.showModal;
    modalType = state.modalType;
    modalContent = state.modalContent;
  });

  // Subscribe to builderStore for activeOption
  let activeOption;
  builderState.subscribe(($builderState) => {
    activeOption = $builderState.activeOption;
  });

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

  const onClose = () => {
    modalStore.closeModal();
  };

  const onConfirm = () => {
    globalStore.setLevel(selectedLevel);
    modalStore.closeModal();
  };

  onMount(() => {
    globalStore.setCurrentPage("Builder");
  });
</script>

<main class="flex flex-grow flex-col max-h-screen">
  <div class="flex p-2 bg-bg custom-border-bottom">
    <OptionsContent bind:activeOption {optionToOptionsComponent} />
  </div>
  <MainContent {activeOption} {optionToMainComponent} />

  <!-- Modal HTML structure -->
  {#if showModal && modalType === "levelSelect"}
    <BaseModal {modalContent} {onClose} {onConfirm}>
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

<style>
</style>
