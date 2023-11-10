<script>
  import themeStore from "../../stores/themeStore";
</script>

<!-- Add bg-dark-header-footer or bg-light-header-footer based on the theme -->
<div
  class={`flex flex-col flex-grow max-w-[350px] h-full border-r ${
    $themeStore === "dark" ? "bg-dark-card" : "bg-light-card"
  }`}
>
  <div
    class={`w-full p-2 border-b  ${
      $themeStore === "dark" ? "bg-dark-bg2" : "bg-light-bg2"
    }`}
  >
    <h2 class="text-lg font-semibold text-center">Workout</h2>
  </div>
  <div class="p-4">
    <p>Content here...</p>
  </div>
</div>

<style>
</style>
