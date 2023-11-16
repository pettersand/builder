<script lang="ts">
  import { onMount } from "svelte";
  import {
    clients as clientStore,
    activeClient,
  } from "../../../../../stores/clientStore";
  import { fetchClientData } from "../../../../../utilities/clientAPI";

  let searchTerm = "";

  // Get the initial list of clients
  let clients = [];
  onMount(() => {
    clientStore.subscribe(($clients: any[]) => {
      clients = $clients;
    });
  });

  // Sets active client and fetches client data
  const setActiveClient = async (clientObj) => {
    activeClient.set(clientObj.client);

    try {
      const clientData = await fetchClientData(clientObj.client.id);
      activeClient.update((client) => {
        return { ...client, clientDetails: clientData };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event, clientObj) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveClient(clientObj);
    }
  };

  $: filteredClients = clients.filter((clientObj) =>
    clientObj.client.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<div class="flex flex-col w-full items-center">
  <div
    class="flex flex-row w-full justify-evenly custom-border-bottom text-lg font-bold"
  >
    <button class="bg-card w-full p-1 custom-border-right hover:bg-card">
      1. Setup
    </button>
    <button class="w-full p-1 custom-border-right hover:bg-card">
      2. Template
    </button>
    <button class=" w-full p-1 custom-border-right hover:bg-card">
      3. Program
    </button>
    <button class=" w-full p-1 hover:bg-card"> 4. Final </button>
  </div>

  <!-- Main Container -->
  <div class="flex flex-row h-full w-full justify-center">
    <!-- Client Options Container -->
    <div
      class="flex flex-row justify-between w-1/3 gap-4 p-4 custom-border-right"
    >
      <div class="flex flex-col gap-4 w-1/2">
        {#if $activeClient}
          <span class="font-bold">Active Client</span>
          <p class="text-lg">
            {$activeClient.first_name}
            {$activeClient.last_name}
          </p>
          <p>
            {$activeClient.email}
          </p>
          <p>Age, Gender, {$activeClient.status}</p>
        {:else}
          <span class="font-bold">Select Client</span>
        {/if}
      </div>

      <div class="gap-1 overflow-y-scroll w-1/2 border">
        <input
          type="text"
          bind:value={searchTerm}
          placeholder="Search clients..."
          class="p-1 border rounded w-full"
        />

        <div
          class="overflow-y-auto max-h-60 divide-y divide-gray-300 zebra-striped"
        >
          {#each filteredClients as clientObj}
            <div
              class="p-1 cursor-pointer"
              on:click={() => setActiveClient(clientObj)}
              on:keydown={(event) => handleKeyPress(event, clientObj)}
            >
              {clientObj.client.first_name}
              {clientObj.client.last_name}
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- File Handling Container -->
    <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
      <span class="font-bold">File Handling</span>
      <div>Input for File Name</div>
      <div>Default Name View</div>
    </div>
    <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
      <span class="font-bold">Continue</span>
      <div>Click to save & continue</div>
      <button class="bg-accent2 p-4 font-bold text-lg">Continue</button>
    </div>
  </div>
</div>
