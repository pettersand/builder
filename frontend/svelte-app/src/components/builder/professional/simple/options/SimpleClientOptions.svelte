<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { get } from "svelte/store";
  import {
    clients,
    activeClient,
    clientData,
    type Client,
  } from "../../../../../utilities/client";
  import {
    programStore,
    saveProgramData,
  } from "../../../../../utilities/builder/simple";
  import { userStore } from "../../../../../utilities/user";
  import SaveStatus from "../../../../base/SaveStatus.svelte";

  let searchTerm: string = "";
  let filteredClients: Client[] = [];

  let currentClientId = null;
  let currentClientDetails = null;
  let userId: string | null;

  userStore.subscribe(($user) => {
    userId = $user.userId;
  });

  const unsubscribeActiveClient = activeClient.subscribe((value) => {
    currentClientId = value;

    // If trainer selects himself, set currentClientDetails to a generic object
    if (currentClientId === userId) {
      currentClientDetails = {
        firstName: "Myself",
        lastName: "",
        email: "",
        status: "",
      };
    } else if (currentClientId) {
      const clientList = $clients;
      currentClientDetails = clientList.find(
        (client) => client.id === currentClientId
      );
    } else {
      currentClientDetails = null;
    }
  });

  onMount(async () => {
    await clients.fetchAndInitialize();
  });

  // Sets active client and fetches client data
  function setActiveClient(clientId: string) {
    activeClient.updateActiveClient(clientId);
    clientData.fetchClientData(clientId);
  }

  const handleKeyPress = (event: KeyboardEvent, client) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveClient(client);
    }
  };

  const handleContinue = async () => {
    const currentProgram = get(programStore);

    try {
      const response = await saveProgramData(currentProgram);
      console.log("Program created/updated:", response);
      // Update the store with the new ID if it's a new program
      if (!currentProgram.id) {
        programStore.updateProgram({ id: response.id });
      }
    } catch (error) {
      console.error("Error creating/updating program:", error);
    }
  };

  $: filteredClients = $clients.filter((client) =>
    client.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  onDestroy(() => {
    unsubscribeActiveClient();
  });
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
        {#if currentClientDetails}
          <span class="font-bold">Active Client</span>
          <p class="text-lg">
            {currentClientDetails.firstName}
            {currentClientDetails.lastName}
          </p>
          <p>
            {currentClientDetails.email}
          </p>
          <p>Age, Gender, {currentClientDetails.status}</p>
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
          <div
            class="p-1 cursor-pointer"
            on:click={() => setActiveClient(userId)}
            on:keydown={(event) => handleKeyPress(event, userId)}
          >
            Myself
          </div>
          {#each filteredClients as client}
            <div
              class="p-1 cursor-pointer"
              on:click={() => setActiveClient(client.id)}
              on:keydown={(event) => handleKeyPress(event, client)}
            >
              {client.firstName}
              {client.lastName}
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- File Handling Container -->
    <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
      <span class="font-bold">File Handling</span>
      <div>Show active program & client, locks client selection, Show program name</div>

      <SaveStatus context="programData" />
    </div>
    <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
      <span class="font-bold">Continue</span>
      <div>Click to save & continue to template creation</div>
      <button class="bg-accent2 p-4 font-bold text-lg" on:click={handleContinue}
        >Continue</button
      >
    </div>
  </div>
</div>
