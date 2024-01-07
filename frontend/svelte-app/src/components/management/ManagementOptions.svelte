<script lang="ts">
  import Icon from "@iconify/svelte";
  import { managementState } from "./managementStore";

  let state;
  managementState.subscribe((value) => {
    state = value;
  });

  function setActiveOption(option: string) {
    managementState.update((currentState) => {
      return { ...currentState, activeOption: option };
    });
  }

  /**
   * * Management Sub Options, handles tab state for Management page
   * TODO: Add state functionality for Dashboard / Client Management
   */
</script>

<div class="flex flex-col items-start w-full flex-grow whitespace-nowrap">
  <span class="font-bold text-lg items-center p-2 mb-2 w-full"
    >Management Options</span
  >
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "dashboard" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("dashboard")}
  >
    <Icon icon="material-symbols:manage-accounts" width="25" height="25" />
    Dashboard
  </button>
  <button
    class={`icon-label whitespace-nowrap hover:bg-card ${
      state.activeOption === "clients" ? "bg-card font-bold" : ""
    }`}
    on:click={() => setActiveOption("clients")}
  >
    <Icon icon="clarity:group-solid" width="25" height="25" />
    Clients</button
  >
  <button class={`icon-label whitespace-nowrap text-gray-400 hover:bg-card"}`}>
    <Icon icon="gridicons:stats-alt" width="25" height="25" />
    Statistics</button
  >
</div>
