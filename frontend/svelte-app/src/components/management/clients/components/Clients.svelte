<script lang="ts">
    /**
     * * Comprehensive Client List
     * TODO: Design client list
     * TODO: Create functions: filter, search, add
     * TODO: Expand client on click - show more info, setActive client
     * TODO: Create "Open" button - active client to Data container
     * 
     * TODO: Future: Pagination, Sortable, Booking info
     */
import { onMount } from "svelte";
import Icon from "@iconify/svelte";
import { clients, activeClient } from "../../../../stores/clientStore";

let currentClient: string = sessionStorage.getItem("activeClient.clientId");

onMount(() => {
    clients.initialize();
  });

  $: if ($activeClient) {
    sessionStorage.setItem("activeClient.clientId", $activeClient);
  }



</script>

<div class="flex bg-bg gap-4 p-2 custom-border-bottom">
  <h2 class="text-lg p-2 font-semibold text-start">Clients</h2>
  <input type="search" class="w-1/2 p-2 rounded-md border" placeholder="Search" />
  <input type="select" class="w-1/4 p-2 rounded-md border" placeholder="Filter" />
  <button class="w-1/4 p-2 rounded-md bg-accent text-bg font-bold">Add Client</button>
</div>
<div class="text-paragraph">
    {#each $clients as client}
    <div class="flex justify-between items-center custom-border-bottom">
        <button class="w-full p-2 text-left text-lg hover:bg-card " on:click={() => activeClient.set(client.id)}>
        {client.firstName} {client.lastName}</button>

        <!-- TODO: conditional on status - active/inactive/away -->
        <Icon icon="material-symbols:circle" width="20" height="20" color="green" class="mx-2" />
      </div>
  {/each}
</div>

