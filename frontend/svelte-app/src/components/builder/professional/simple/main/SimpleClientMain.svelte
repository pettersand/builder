<script lang="ts">
  import ProgramNotes from "./components/ProgramNotes.svelte";
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

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  function calculateTimeToGoal(goalDate: string): string {
    const today = new Date();
    const dueDate = new Date(goalDate);
    const diffTime = Math.abs(dueDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} months, ${diffWeeks % 4} weeks, ${diffDays % 7} days`;
  }

  const goalTypeMap = {
    short: "Short Term",
    med: "Medium Term",
    long: "Long Term",
  };

  function sortGoals(goals) {
    return goals.slice().sort((a, b) => {
      const order = ["short", "med", "long"];
      return order.indexOf(a.goal_type) - order.indexOf(b.goal_type);
    });
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
            {#each sortGoals(clientDetails.goals) as goal}
              <div class="flex flex-col justify-between bg-card">
                <div class="flex flex-col">
                  <p>
                    {goalTypeMap[goal.goal_type]} - Due: {formatDate(
                      goal.goal_date
                    )}
                  </p>
                  <p>{goal.content}</p>
                </div>

                <p>Deadline: {calculateTimeToGoal(goal.goal_date)}</p>
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
    <ProgramNotes />
  </div>
</div>
