<script lang="ts">
  import Icon from "@iconify/svelte";
  import { builderState } from "../../stores/builderStore";

  let state;
  builderState.subscribe((value) => {
    state = value;
  });

  function setActiveOption(option: string) {
    builderState.update((currentState) => {
      return { ...currentState, activeOption: option };
    });
  }
</script>

<div class="flex flex-col items-start w-full flex-grow">
  <span class="font-bold text-lg items-center p-2 mb-2 w-full"
    >Builder Options</span
  >
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "newProgram" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("newProgram")}
  >
    <Icon icon="mingcute:file-new-fill" width="25" height="25" />
    Simple Builder
  </button>

  <button
    class={`icon-label text-gray-400 whitespace-nowrap hover:bg-card ${
      state.activeOption === "advancedPro" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("advancedPro")}
  >
    <Icon icon="clarity:note-edit-solid" width="25" height="25" />
    Advanced Program
  </button>
  <button
    class={`icon-label text-gray-400 whitespace-nowrap hover:bg-card ${
      state.activeOption === "manageTemplates" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("manageTemplates")}
  >
    <Icon icon="material-symbols:manage-search" width="25" height="25" />
    Templates
  </button>
  <button
    class={`icon-label text-gray-400 whitespace-nowrap hover:bg-card ${
      state.activeOption === "managePrograms" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("managePrograms")}
  >
    <Icon icon="material-symbols:manage-search" width="25" height="25" />
    Programs
  </button>
  <button
    class={`icon-label text-gray-400 whitespace-nowrap hover:bg-card ${
      state.activeOption === "customizeVariables" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("customizeVariables")}
  >
    <Icon icon="material-symbols:manage-search" width="25" height="25" />
    Customize
  </button>
</div>
