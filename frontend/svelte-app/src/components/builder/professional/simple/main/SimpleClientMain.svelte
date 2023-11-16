<script lang="ts">
  import {
    activeClient,
    clients as clientStore,
  } from "../../../../../stores/clientStore";

  let clientDetails;

  $: if ($activeClient && $activeClient.clientDetails) {
    console.log($activeClient);
    clientDetails = $activeClient.clientDetails;
  } else {
    clientDetails = null;
  }
</script>

<div class="gap-4 w-full h-full flex flex-row">
  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 shadow-xl"
  >
    <span class="font-bold text-lg">Program History</span>
  </div>
  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 gap-2 shadow-xl"
  >
    <div class="h-1/2 flex flex-col custom-border-bottom">
      <span class="font-bold text-lg">Client Data</span>
      {#if clientDetails}
        <div class="flex flex-col justify-evenly">
          {#if clientDetails}
            <span>Goals: {clientDetails.clientDetails}</span>
          {:else}
            <span>No Goals Data</span>
          {/if}
          <span>Preferences</span>
          <span>Injuries</span>
          <span>Strength</span>
          <span>Completion Stats</span>
          <span>Progress Stats</span>
        </div>
      {/if}
    </div>

    <div class="h-1/2 flex flex-col">
      <span class="font-bold text-lg">Notes</span>
    </div>
  </div>
  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 shadow-xl"
  >
    <span class="font-bold text-lg">Program Notes</span>
    <div class="flex flex-col">
      <span>Custom Name</span>
      <span>Focus</span>
      <span>Phase</span>
      <span>Program Notes</span>
      <button class="border-4 rounded-lg border-accent2 p-2 font-bold w-1/3"
        >Add Custom</button
      >
    </div>
  </div>
</div>
