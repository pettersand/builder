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
      {#if clientDetails}
        <!-- Goals Container -->
        <div class="flex flex-col gap-4 justify-evenly custom-border-bottom">
          <span class="font-bold">Goals:</span>
          {#if clientDetails.goals && clientDetails.goals.length}
            {#each clientDetails.goals as goal}
              <div class="flex flex-row justify-between bg-card">
                <div class="flex flex-col">
                  <p>{goal.goal_type} Due: {goal.goal_date}</p>
                  <p>{goal.content}</p>
                </div>
                <div class="flex flex-col">
                  <p>Time To Goal</p>
                </div>
              </div>
            {/each}
          {:else}
            <p>No Goals Data</p>
          {/if}
        </div>
        <!-- Injuries Container -->
        <div class="flex flex-col gap-4 justify-evenly custom-border-bottom">
          <span class="font-bold">Injuries:</span>
          {#if clientDetails.injuries && clientDetails.injuries.length}
            {#each clientDetails.injuries as injury}
              <p>{injury.injury_name} - {injury.site}</p>
            {/each}
          {:else}
            <p>No Injuries Data</p>
          {/if}
        </div>

        <div class="flex flex-col gap-4 justify-evenly">
          <span class="font-bold">Preferences:</span>
          {#if clientDetails.preferences && clientDetails.preferences.length}
            {#each clientDetails.preferences as preference}
              <p>{JSON.stringify(preference.details)}</p>
            {/each}
          {:else}
            <p>No Preferences Data</p>
          {/if}
        </div>

        <span>Strength</span>
        <span>Completion Stats</span>
        <span>Progress Stats</span>
      {/if}
    </div>

    <!-- Client Notes Container -->
    <div class="h-1/2 flex flex-col">
      <div>
        <span class="font-bold">Notes:</span>
        {#if clientDetails.notes && clientDetails.notes.length}
          {#each clientDetails.notes as note}
            <p>{note.content}</p>
          {/each}
        {:else}
          <p>No Notes Data</p>
        {/if}
      </div>
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
