<script>
  import themeStore from "../../stores/themeStore";
</script>

<div class="grid grid-cols-2 flex-grow">
  <!-- Card 1 -->
  <div
    class={`card  ${$themeStore === "dark" ? "bg-dark-card" : "bg-light-card"}`}
  >
    <div
      class={`header-bar ${
        $themeStore === "dark" ? "bg-dark-card2" : "bg-light-card2"
      }`}
    >
      <h2 class="text-lg font-semibold text-center">Calendar</h2>
    </div>
    <div class="p-4">
      <p>Content here...</p>
    </div>
  </div>

  <!-- Card 2 -->
  <div
    class={`card border-l ${
      $themeStore === "dark" ? "bg-dark-card" : "bg-light-card"
    }`}
  >
    <div
      class={`header-bar  ${
        $themeStore === "dark" ? "bg-dark-bg2" : "bg-light-bg2"
      }`}
    >
      <h2 class="text-lg font-semibold text-center">Graphs</h2>
    </div>
    <div class="p-4">
      <p>Content here...</p>
    </div>
  </div>

  <!-- Card 3 -->
  <div
    class={`card border-t ${
      $themeStore === "dark" ? "bg-dark-card" : "bg-light-card"
    }`}
  >
    <div
      class={`header-bar  ${
        $themeStore === "dark" ? "bg-dark-card2" : "bg-light-card2"
      }`}
    >
      <h2 class="text-lg font-semibold text-center">Goals</h2>
    </div>
    <div class="p-4">
      <p>Content here...</p>
    </div>
  </div>

  <!-- Card 4 -->
  <div
    class={`card border-l border-t ${
      $themeStore === "dark" ? "bg-dark-card" : "bg-light-card"
    }`}
  >
    <div
      class={`header-bar  ${
        $themeStore === "dark" ? "bg-dark-bg2" : "bg-light-bg2"
      }`}
    >
      <h2 class="text-lg font-semibold text-center">Progress</h2>
    </div>
    <div class="p-4">
      <p>Content here...</p>
    </div>
  </div>
</div>

<style>
  .header-bar {
    width: 100%;
    padding: 0.5rem 0;
  }
</style>
