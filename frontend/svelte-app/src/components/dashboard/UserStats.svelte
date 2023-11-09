<script>
  import themeStore from "../../stores/themeStore";
  import Icon from "@iconify/svelte";
</script>

<div
  class={`user-stats-container flex h-[200px] border-b ${
    $themeStore === "dark" ? "bg-dark-bg" : "bg-light-bg"
  }`}
>
  <!-- First Area -->
  <div
    class={`stats-area flex-1 p-4 border-r ${
      $themeStore === "dark" ? "border-dark-text" : "border-light-text"
    }`}
  >
    <h2 class="text-lg font-semibold flex items-center mb-4">
      <Icon icon="healthicons:gym-outline" width="50" height="50" />Workouts
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <p>Workouts completed: 10</p>
      <p>Exercises completed: 20</p>
      <p>Weeks Trained: 5</p>
      <p>Total logins: 24</p>
      <!-- Add more metrics here -->
    </div>
  </div>

  <!-- Second Area -->
  <div
    class={`stats-area flex-1 p-4 border-r ${
      $themeStore === "dark" ? "border-dark-text" : "border-light-text"
    }`}
  >
    <h2 class="text-lg font-semibold flex items-center mb-4">
      <Icon
        icon="healthicons:exercise-weights"
        width="50"
        height="50"
      />Exercises
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <p>Exercises Skipped: 10</p>
      <p>Exercises completed: 20</p>
      <p>Goals Reached: 5</p>
      <!-- Add more metrics here -->
    </div>
  </div>

  <!-- Third Area -->
  <div class="stats-area flex-1 p-4">
    <h2 class="text-lg font-semibold flex items-center mb-4">
      <Icon icon="game-icons:progression" width="45" height="45" />Progress
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <p>Strength Gained: 10%</p>
      <p>Total Lifts: 500kg</p>
      <p>Most Gains: Squat 20%</p>
      <!-- Add more metrics here -->
    </div>
  </div>
</div>
