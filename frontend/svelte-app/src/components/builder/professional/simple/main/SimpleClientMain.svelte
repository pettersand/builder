<script lang="ts">
  import ProgramNotes from "./components/ProgramNotes.svelte";
  import {
    activeClient,
    clientData,
    type ClientGoal,
  } from "../../../../../utilities/client";
  import { formatDate } from "../../../../../utilities/global";
  import { calculateTimeToGoal } from "../../../../../utilities/goals";

  let activeClientId: string | null;
  let clientGoals: ClientGoal[] = [];

  activeClient.subscribe($activeClient => {
    activeClientId = $activeClient;
    if (activeClientId) {
      clientData.fetchClientData(activeClientId);
    }
  });


  clientData.subscribe($clientData => {
    clientGoals = $clientData && $clientData.goals ? $clientData.goals : [];
  });
</script>

<div class="gap-4 w-full h-full flex flex-row">
  <!-- Program History Container -->
  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 shadow-xl"
  >
    <span class="font-bold text-lg">Program History</span>
  </div>

  <!-- Client Data & Notes Container -->
  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 gap-2 shadow-xl"
  >
    <!-- Client Data Container -->
    <div class="h-1/2 flex flex-col gap-4 custom-border-bottom">
      <span class="font-bold text-lg">Client Data</span>
      {#if activeClientId}
        {#if clientGoals.length > 0}
          <div class="goals-container">
            {#each clientGoals as goal}
              <div class="goal">
                <h3>{goal.goal}</h3>
                <p>Type: {goal.type}</p>
                <p>Status: {goal.status}</p>
                <p>Due Date: {formatDate(new Date(goal.dueDate))}</p>
                <p>Time to Goal: {calculateTimeToGoal(new Date(goal.dueDate))}</p>
              </div>
            {/each}
          </div>
        {:else}
          <p>No goals available for this client</p>
        {/if}
      {:else}
        <p>Select a client to view goals</p>
      {/if}
    </div>

    <span>Strength</span>
    <span>Completion Stats</span>
    <span>Progress Stats</span>
  </div>

  <!-- Client Notes Container -->
  <div class="h-1/2 flex flex-col">
    <div>
      <span class="font-bold">Notes:</span>
    </div>
  
  </div>

  <div
    class="flex flex-grow w-1/3 bg-bg flex flex-col justify-start p-3 shadow-xl"
  >
    <span class="font-bold text-lg">Program Notes</span>
    <ProgramNotes />
  </div>
</div>
