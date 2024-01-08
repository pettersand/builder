<script lang="ts">
    /**
     * * Comprehensive Client List
     * TODO: Import client list from store / database
     * TODO: Create functions: filter, search, add
     * TODO: Expand client on click - show more info, setActive client
     * TODO: Create "Open" button - active client to Data container
     * TODO: Future: Pagination, Sortable, Booking info
     */
import { onMount } from "svelte";
import type { Client } from "../../../../types/Client";
import { clients as clientStore } from "../../../../stores/clientStore";

let clients: Client[] = [];

onMount(() => {
    const storedClients = sessionStorage.getItem("clients");
    if (storedClients) {
        clients = JSON.parse(storedClients);
    }
});
onMount(() => {

});


</script>

<div class="bg-bg p-2 custom-border-bottom">
  <h2 class="text-lg p-2 font-semibold text-start">Clients</h2>
</div>
<div class="p-4 text-paragraph">
{#each clients as client}
    <p class="whitespace-nowrap">{client.firstName} {client.lastName}</p>
    
{/each}
</div>

