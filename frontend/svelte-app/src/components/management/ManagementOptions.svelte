<script lang="ts">
  import Icon from "@iconify/svelte";

  /**
   * * Management Sub Options, handles tab state for Management page
   * TODO: Add state functionality for Dashboard / Client Management 
   */

</script>

<div class="flex flex-col items-start w-full flex-grow">
  <span class="font-bold text-lg items-center p-2 mb-2 w-full"
    >Management Options</span
  >
  <button class={`icon-label whitespace-nowrap hover:bg-card"}`}>
    <Icon icon="material-symbols:manage-accounts" width="25" height="25" />
    Dashboard
  </button>
  <button class={`icon-label whitespace-nowrap hover:bg-card"}`}>
    <Icon icon="material-symbols:manage-accounts" width="25" height="25" />
    Client Management</button
  >
  <button class={`icon-label whitespace-nowrap text-gray-400 hover:bg-card"}`}>
    <Icon icon="gridicons:stats-alt" width="25" height="25" />
    Statistics</button
  >
</div>
