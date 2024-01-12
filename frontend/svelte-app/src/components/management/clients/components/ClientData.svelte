<script lang="ts">
  import { onMount } from "svelte";
  import { activeClient, clientData } from "../../../../utilities/client";
  import type { ClientData, ClientGoal } from "../../../../utilities/client";
  import GoalsData from "./data/GoalsData.svelte";

  /**
   * * Client Data
   * TODO: Design client data
   */

  let currentClient: string | null;
  activeClient.subscribe(value => currentClient = value);

  let currentData: ClientData | null;
  clientData.subscribe(value => currentData = value);

  $: if ($activeClient) {
    clientData.fetchClientData($activeClient);
  }


  let goals: ClientGoal[] = [];

  $: if (currentData && currentData.goals) {
    goals = currentData.goals;
    console.log("Client Goals:", goals);
  }

</script>

<div class="flex flex-col gap-4">
  <div class="flex justify-between items-center bg-bg p-2 custom-border-bottom">
    <h2 class="text-lg p-2 font-semibold text-start">Client Data</h2>
    {#if currentClient}
      <p>Active Client ID: {currentClient}</p>
      <GoalsData {goals}/>
    {:else}
      <p>No active client selected</p>
    {/if}
  </div>
</div>
