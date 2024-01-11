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

  import { saveGoal } from "../../../utilities/goals/index";
  import { GoalType, type Goal } from "../../../utilities/goals/index";

  let createdBy = "";
  let createdFor = "";

  let goalForm: Goal = {
    goal: "",
    dueDate: new Date(),
    type: GoalType.Long,
    private: false,
  }

/**
 * TODO: Create function to determine owner of goal (client or self)
 * */ 
  $: createdFor = determineCreator();

  const addGoal = async () => {
    goalForm.createdBy = createdBy;
    goalForm.createdFor = createdFor;

    try {
      const savedGoal = await saveGoal(goalForm);
      // TODO: Update store/storage
      console.log("New Goal Added", savedGoal);
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  }; 



  const updateGoalsStorage = (newGoal: FrontendGoal): void => {
    const currentGoals: FrontendGoal[] = JSON.parse(
      sessionStorage.getItem("goals") || "[]"
    );
    currentGoals.push(newGoal);
    sessionStorage.setItem("goals", JSON.stringify(currentGoals));
  };

</script>

<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <div class="text-lg font-bold">Long Term Goal</div>

  <div class="flex gap-4 w-full">
    <div class="flex items-center gap-4">
      <label for="date" class="whitespace-nowrap">Set Due Date</label>
      <input
        type="date"
        bind:value={longTermGoal.dueDate}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
    <div class="flex flex-col w-full">
      <input
        type="textbox"
        placeholder="Enter Goal"
        bind:value={longTermGoal.goal}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
  </div>
  <div class="flex w-full items-center justify-center">
    <button
      class="bg-accent2 rounded-lg p-2 font-bold"
      on:click={addLongTermGoal}>ADD GOAL</button
    >
  </div>
</div>

<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <div class="text-lg font-bold">Short Term Goal</div>

  <div class="flex gap-4 w-full">
    <div class="flex items-center gap-4">
      <label for="date" class="whitespace-nowrap">Set Due Date</label>
      <input
        type="date"
        bind:value={shortTermGoal.dueDate}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
    <div class="flex flex-col w-full">
      <input
        type="textbox"
        placeholder="Enter Goal"
        bind:value={shortTermGoal.goal}
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
  </div>
  <div class="flex w-full items-center justify-center">
    <button class="bg-accent2 rounded-lg p-2 font-bold">ADD GOAL</button>
  </div>
</div>
