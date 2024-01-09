<script lang="ts">
  import { onMount } from "svelte";
  import { activeClient } from "../../../../stores/clientStore";

  /**
   * * Client Data
   * TODO: Design client data
   */

  let currentClient: string | null;
  activeClient.subscribe((value) => (currentClient = value));
</script>

<div class="flex flex-col gap-4">
  <div class="flex justify-between items-center bg-bg p-2 custom-border-bottom">
    <h2 class="text-lg p-2 font-semibold text-start">Client Data</h2>
    {#if currentClient}
            <p>Active Client ID: {currentClient}</p>
        {:else}
            <p>No active client selected</p>
        {/if}
  </div>
</div>
