<script lang="ts">
import { onMount } from "svelte";
import type { FrontendGoal } from "./types";
import Icon from '@iconify/svelte';


let goalsData: FrontendGoal[];


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
                    <tr>
                        <td class="border px-4 py-2">{goal.type}</td>
                        <td class="border px-4 py-2">{goal.goal}</td>
                        <td class="border px-4 py-2">{goal.dueDate}</td>
                        <td class="border px-4 py-2">{goal.status}</td>
                        <td class="border px-4 py-2">
                            <button class="hover:text-contrast text-headline font-bold py-2 px-2">
                                <Icon icon="fa-solid:edit" width="30" height="30" />
                            </button>
                            <button class="hover:text-accent2 text-headline font-bold py-2 px-2">
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