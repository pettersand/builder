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
import type { Client } from "../../../../types/Client";
import { clients, activeClient } from "../../../../stores/clientStore";



onMount(() => {
    clients.initialize();
  });


</script>

<div class="flex bg-bg p-2 custom-border-bottom">
  <h2 class="text-lg p-2 font-semibold text-start">Clients</h2>
  <input type="search" class="w-1/2 p-2 rounded-md" placeholder="Search" />
  <input type="select" class="w-1/4 p-2 rounded-md" placeholder="Filter" />
  <button class="w-1/4 p-2 rounded-md bg-accent text-bg">Add Client</button>
</div>
<div class="p-4 text-paragraph">
    {#each $clients as client}
    <div>{client.firstName} {client.lastName}</div>
  {/each}
</div>

