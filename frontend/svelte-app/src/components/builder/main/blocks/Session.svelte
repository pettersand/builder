<!-- Session.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string = "Session"; // Default label
</script>

<div
  class={`w-44 h-8 flex justify-center items-center border ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  {label}
</div>

<style>

</style>
