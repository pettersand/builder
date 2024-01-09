<script lang="ts">
  import { onMount } from "svelte";
  import { activeClient, clientData } from "../../../../stores/clientStore";
  import type { ClientData } from "../../../../types/Client"

  /**
   * * Client Data
   * TODO: Design client data
   */

  let currentClient: string | null;
  activeClient.subscribe(value => currentClient = value);

 $: if ($activeClient) {
    clientData.fetchClientData($activeClient);
 }

 let currentData: ClientData | null;
 $: if ($clientData) {
   console.log($clientData);
   clientData.subscribe(value => currentData = value);
 }


</script>

<div class="flex flex-col gap-4">
  <div class="flex justify-between items-center bg-bg p-2 custom-border-bottom">
    <h2 class="text-lg p-2 font-semibold text-start">Client Data</h2>
    {#if currentClient}
      <p>Active Client ID: {currentClient}</p>
      <p>Active Client Goals: {currentData}</p>
    {:else}
      <p>No active client selected</p>
    {/if}
  </div>
</div>
