<script lang="ts">
  /* import { newLongTermGoal } from "../../../utilities/api";
  import type { FrontendGoal, BackendGoal } from "./types";
  import { backToFrontGoal, frontToBackGoal } from "./types";
/*   import type { FrontendGoal } from "../../../types/Goals";
  import { Goal } from "../../../types/Goals"; */

  /**
   * * Handles adding of new simple goals for logged in user
   * TODO: Add function for short term goals
   * TODO: Validate input
   * TODO: Add error/confirmation handling
   */

  import {
    saveGoal,
    goalsStore,
    determineCreator,
    GoalType,
    type Goal,
  } from "../../../utilities/goals";


  export let createdForId: string;

  let goalForm: Goal = {
    createdFor: createdForId,
    goal: "",
    dueDate: new Date(),
    type: GoalType.Long,
    private: false,
  };

  /**
   * TODO: Create function to determine owner of goal (client or self)
   * */
/*   $: createdFor = determineCreator(); */

  const addGoal = async () => {
    try {
      const savedGoal = await saveGoal(goalForm);
      goalsStore.addGoal(savedGoal);
      console.log("New Goal Added", savedGoal);
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };
</script>

<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <div class="text-lg font-bold">New Goal</div>

  <div class="flex flex-col gap-4 w-full">
    <div class="flex items-center gap-4">
      <label for="type" class="whitespace-nowrap">Goal Type</label>
      <select
        name="type"
        bind:value={goalForm.type}
        class="border border-paragraph rounded-lg p-2"
      > 
        <option value="long">Long Term</option>
        <option value="short">Short Term</option>
      </select>

      <label for="date" class="whitespace-nowrap">Set Due Date</label>
      <input
        type="date"
        bind:value={goalForm.dueDate}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
    <div class="flex flex-col w-full">
      <input
        type="textbox"
        placeholder="Enter Goal"
        bind:value={goalForm.goal}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
  </div>
  <div class="flex w-full items-center justify-center">
    <button
      class="bg-accent2 rounded-lg p-2 font-bold"
      on:click={addGoal}>ADD GOAL</button
    >
  </div>
</div>

