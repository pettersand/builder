<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import DotsMenu from "../../base/DotsMenu.svelte";
  import modalStore from "../../../stores/modalStore";
  import NewGoal from "./NewGoal.svelte";
  import { getGoals } from "../../../utilities/api";
  import type { FrontendGoal, BackendGoal } from "./types";
  import { backToFrontGoal, frontToBackGoal } from "./types";
  import { construct_svelte_component } from "svelte/internal";

  let goalsData: FrontendGoal[];

  const handleSelect = (item) => {
    console.log("Testing");
    // Item selection logic here
  };

  const openNewGoalModal = () => {
    modalStore.openModal(NewGoal);
  };

  const handleKeydown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelect(item);
      event.preventDefault();
    }
  };

  async function fetchGoals(): Promise<void> {
    try {
      console.log("Fetching Goals");
      sessionStorage.removeItem("goals");

      const response = await getGoals();
      console.log("Goals:", response);

      const backendGoals: BackendGoal[] = response;
      console.log("Backend Goals:", backendGoals);
      goalsData = backendGoals.map(backToFrontGoal);
      sessionStorage.setItem("goals", JSON.stringify(goalsData));

    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };


  onMount(() => {
    const storedGoals = sessionStorage.getItem("goals");
    if (storedGoals) {
      goalsData = JSON.parse(storedGoals);
    } else {
      console.log("Fetching Goals");
      fetchGoals();
    }
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
        on:click={() => handleSelect("Edit Goal")}
        on:keydown={(event) => handleKeydown(event, "Edit Goal")}
      >
        Edit Goal
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
  <div class="flex flex-col text-center items-center gap-2 p-4 text-paragraph text-lg font-bold">
  {#if !goalsData}
    <!-- Display when no goals are set -->
    <p class="text-xl text-red-600">Uh oh!</p>
    <p>It looks like you do not have any goals set at the moment!</p>
    <p>But don't worry, we'll get you started.</p>
    <button
      class="text-center bg-accent2 text-headline py-2 px-4 rounded-full font-bold mt-4 whitespace-nowrap"
      on:click={openNewGoalModal}>Create Goals!</button>
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
      <p>Goals Found</p>
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
