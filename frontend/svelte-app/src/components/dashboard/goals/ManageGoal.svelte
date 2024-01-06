<script lang="ts">
  import { onMount } from "svelte";
  import type { FrontendGoal } from "./types";
  import { deleteUserGoal } from "../../../utilities/api";
  import Icon from "@iconify/svelte";

  /**
   * * Handles management of goals for logged in user, in current iteration only deletion
   * * Will be expanded to include editing and altering status
   * TODO: Ensure sessionStorage updates upon deletion
   */

  let goalsData: FrontendGoal[];

  const deleteGoal = async (goalId: number) => {
    console.log("Deleting Goal:", goalId);
    try {
        const response = await deleteUserGoal(goalId);

        if (response.status === 200) {
            console.log("Goal deleted");
            goalsData = [...goalsData.filter((goal) => goal.id !== goalId)];
            sessionStorage.setItem("goals", JSON.stringify(goalsData));
        }

    } catch (error) {
        console.error("Error deleting goal:", error);
    }
  };

  onMount(() => {
    const storedGoals = sessionStorage.getItem("goals");
    if (storedGoals) {
      goalsData = JSON.parse(storedGoals);
    }
  });
</script>

<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <table class="table-auto">
    <thead>
      <tr>
        <th class="px-4 py-2">Type</th>
        <th class="px-4 py-2">Goal</th>
        <th class="px-4 py-2">Due Date</th>
        <th class="px-4 py-2">Status</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#if goalsData}
        {#each goalsData as goal}
          <tr data-id={goal.id}>
            <td class="border px-4 py-2">{goal.type}</td>
            <td class="border px-4 py-2">{goal.goal}</td>
            <td class="border px-4 py-2">{goal.dueDate}</td>
            <td class="border px-4 py-2">{goal.status}</td>
            <td class="border px-4 py-2">
              <button
                class="hover:text-contrast text-headline font-bold py-2 px-2"
              >
                <Icon icon="fa-solid:edit" width="30" height="30" />
              </button>
              <button
                class="hover:text-accent2 text-headline font-bold py-2 px-2"
                on:click={() => deleteGoal(goal.id)}
              >
                <Icon icon="fluent:delete-24-filled" width="30" height="30" />
              </button>
            </td>
          </tr>
        {/each}
      {:else}
        <tr>
          <td class="border px-4 py-2" colspan="3">No Goals</td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
