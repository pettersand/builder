<!-- Week.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`week-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  Week
</div>

<style>
  .week-block {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    font-weight: bold;
  }
</style>
