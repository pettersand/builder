<script>
    export let goals = [];
  </script>

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
```