<script lang="ts">
  import NewGoal from "../../../../dashboard/goals/NewGoal.svelte";
  import { modalStore } from "../../../../../utilities/modal";
  import { activeClient } from "../../../../../utilities/client";

  export let goals = [];

  let activeClientId: string | null;
  activeClient.subscribe(($activeClient) => (activeClientId = $activeClient));

  const openNewGoalModal = () => {
    if (activeClientId) {
      modalStore.openModal(NewGoal, { createdFor: activeClientId });
    } else {
      console.error("No active client selected");
    }
  };
</script>

<div>
  {#if goals.length === 0}
    <p>No goals to display</p>
  {:else}
    <div>
      {#each goals as goal}
        <div class="goal">
          <h3>{goal.goal}</h3>
          <p>Type: {goal.type}</p>
          <p>Status: {goal.status}</p>
          <p>Due Date: {goal.dueDate}</p>
        </div>
      {/each}
    </div>
  {/if}
  <div class="flex">
    <button
      class="w-full p-2 rounded-md bg-accent text-bg font-bold"
      on:click={openNewGoalModal}>Add Goal</button
    >
  </div>
</div>
