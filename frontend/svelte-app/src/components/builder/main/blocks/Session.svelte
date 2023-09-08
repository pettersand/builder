<!-- Session.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string = "Session"; // Default label
</script>

<div
  class={`session-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  {label}
</div>

<style>
  .session-block {
    width: 165px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    font-weight: bold;
  }
</style>
