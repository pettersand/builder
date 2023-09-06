<!-- src/components/builder/main/blocks/Start.svelte -->
<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`start-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  <b>BUILDR</b>
</div>

<style>
  .start-block {
    width: 200px; /* Set width */
    height: 50px; /* Set height */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-top-left-radius: 8px; /* Slightly rounded top-left corner */
  }
</style>
