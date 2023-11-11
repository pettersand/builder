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
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "newProgram" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("newProgram")}
  >
    <Icon icon="mingcute:file-new-fill" width="25" height="25" />
    New Program
  </button>
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "editProgram" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("editProgram")}
  >
    <Icon icon="clarity:note-edit-solid" width="25" height="25" />
    Edit Program
  </button>
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "manageTemplates" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("manageTemplates")}
  >
    <Icon icon="material-symbols:manage-search" width="25" height="25" />
    Manage Templates
  </button>
</div>
