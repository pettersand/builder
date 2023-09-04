<script lang="ts">
  let weeks = 2;
  let sessionsPerWeek = 2;
  let exercises = ["Squat"];
  import themeStore from "../../stores/themeStore";
</script>

<div
  class={`flex rounded-md mt-4 p-4 ${
    $themeStore === "dark" ? "bg-dark-bg2" : "bg-light-bg2"
  }`}
>
  <!-- Static First Column -->
  <div
    class={`flex flex-col items-start ${
      $themeStore === "dark" ? "border-dark-text" : "border-light-text"
    }`}
  >
    <div
      class={`border w-full h-[45px] ${
        $themeStore === "dark"
          ? "border-dark-text bg-dark-primary"
          : "border-light-text bg-light-primary3"
      }`}
    >
      Username
    </div>
    <div
      class={`border w-full h-[45px] ${
        $themeStore === "dark"
          ? "border-dark-text bg-dark-primary"
          : "border-light-text bg-light-primary3"
      }`}
    >
      Exercise
    </div>
    {#each exercises as exercise}
      <input
        value={exercise}
        class={`border w-full h-[45px] ${
          $themeStore === "dark"
            ? "border-dark-text bg-dark-primary"
            : "border-light-text bg-light-primary3"
        }`}
      />
    {/each}
  </div>

  <!-- Scrollable Container -->
  <div class="overflow-x-auto">
    <div class="flex flex-col">
      <!-- Week Headers -->
      <div
        class={`flex ${
          $themeStore === "dark"
            ? "bg-dark-primary text-dark-mode"
            : "bg-light-primary text-light-mode"
        }`}
      >
        {#each Array(weeks) as _, i}
          <div
            class={`col-span-${sessionsPerWeek * 2} w-[200px] h-[45px] p-2 border ${
              $themeStore === "dark" ? "border-dark-text" : "border-light-text"
            }`}
          >
            Week {i + 1}
          </div>
        {/each}
      </div>

      <!-- Reps/Weight Headers -->
      <div
        class={`flex ${
          $themeStore === "dark"
            ? "bg-dark-primary text-dark-mode"
            : "bg-light-primary text-light-mode"
        }`}
      >
        {#each Array(weeks * sessionsPerWeek * 2) as _}
          <div
            class={`p-2 border w-[100px] h-[45px] ${
              $themeStore === "dark" ? "border-dark-text" : "border-light-text"
            }`}
          >
            {_ % 2 === 0 ? "Reps" : "Weight"}
          </div>
        {/each}
      </div>

      <!-- Editable Fields -->
      {#each exercises as _}
        <div class="flex">
          {#each Array(weeks * sessionsPerWeek * 2) as _}
            <input
              class={`w-[100px] h-[45px] border ${
                $themeStore === "dark"
                  ? "border-dark-text bg-dark-primary3"
                  : "border-light-text bg-light-primary3"
              }`}
            />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
