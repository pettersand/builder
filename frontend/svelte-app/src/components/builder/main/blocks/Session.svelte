<!-- Session.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string = "Session"; // Default label
</script>

<div
  class={`session-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  {label}
</div>

<style>
  .session-block {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    font-weight: bold;
  }
</style>
