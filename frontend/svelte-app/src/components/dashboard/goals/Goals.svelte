<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  import DotsMenu from "../../base/DotsMenu.svelte";
  import NewGoal from "./NewGoal.svelte";
  import ManageGoal from "./ManageGoal.svelte";

  import { goalsStore, getGoals } from "../../../utilities/goals";
  import type { Goal } from "../../../utilities/goals";
  import { getUserId } from "../../../utilities/user";
  import { modalStore } from "../../../utilities/modal";

  /**
   * * Card for disaplying goals for logged in user
   * TODO: Only show active goals
   * TODO: Improve design, containers for short vs long term goals, perhaps only show select few
   * TODO: Add reactivity to sessionStorage updates
   */

  let goalsData: Goal[];

  const handleSelect = (item) => {
    switch (item) {
      case "New Goal":
        modalStore.openModal(NewGoal);
        break;
      case "Manage Goals":
        modalStore.openModal(ManageGoal);
        break;
      default:
        console.log("No action for this item", item);
    }
  };

  const openNewGoalModal = () => {
    const createdFor = getUserId();
    modalStore.openModal(NewGoal, { createdFor });
  };

  const handleKeydown = (event, item: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelect(item);
      event.preventDefault();
    }
  };

  async function fetchGoals(): Promise<void> {
    try {
      console.log("Fetching Goals");
      const fetchedGoals = await getGoals();
      console.log("Goals:", fetchedGoals);

      goalsStore.set(fetchedGoals);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  }

  onMount(() => {
    const unsubscribe = goalsStore.subscribe(($goals) => {
      goalsData = $goals;
    });

    if (!goalsData.length) {
      fetchGoals();
    }

    return () => {
      unsubscribe();
    };
  });
</script>

<div class="bg-bg shadow-xl">
  <div class="flex justify-between items-center bg-bg p-2 custom-border-bottom">
    <h2 class="flex gap-2 items-center text-lg p-2 font-bold text-start">
      <Icon
        icon="fluent-emoji-high-contrast:bullseye"
        width="35"
        height="35"
      />Goals
    </h2>

    <!-- Settings Menu -->
    <DotsMenu on:select={handleSelect}>
      <li
        class="px-4 py-2 hover:bg-card cursor-pointer whitespace-nowrap"
        on:click={() => handleSelect("New Goal")}
        on:keydown={(event) => handleKeydown(event, "New Goal")}
      >
        New Goal
      </li>
      <li
        class="px-4 py-2 hover:bg-card cursor-pointer whitespace-nowrap"
        on:click={() => handleSelect("Manage Goals")}
        on:keydown={(event) => handleKeydown(event, "Manage Goals")}
      >
        Manage Goals
      </li>
    </DotsMenu>
  </div>
  <div
    class="flex flex-col text-center items-center gap-2 p-4 text-paragraph text-lg font-bold"
  >
    {#if !goalsData}
      <!-- Display when no goals are set -->
      <p class="text-xl text-red-600">Uh oh!</p>
      <p>It looks like you do not have any goals set at the moment!</p>
      <p>But don't worry, we'll get you started.</p>
      <button
        class="text-center bg-accent2 text-headline py-2 px-4 rounded-full font-bold mt-4 whitespace-nowrap"
        on:click={openNewGoalModal}>Create Goals!</button
      >
      <div class="flex flex-col w-1/2 mt-4 gap-2 p-4 bg-card border shadow-xl">
        <p class="text-sm text-start">
          PS: Setting goals will help you find purpose with your training, and
          Builder's progress tracking will be there to root you on every step of
          the way.
        </p>
        <p class="text-sm text-start">
          Research has shown that those who determine clear goals are X-AMOUNT%
          more likely to reach their goal. Convinced? Great. Let's go!
        </p>
      </div>
    {:else}
      <!-- Display when there are goals -->
      <div class="flex flex-col gap-4">
        {#each goalsData as goal}
          <div class="p-4 bg-card rounded-lg shadow-md">
            <h3 class="text-lg font-bold">{goal.type} Term Goal</h3>
            <p>Goal: {goal.goal}</p>
            <p>Due Date: {goal.dueDate}</p>
            <p>Status: {goal.status}</p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
