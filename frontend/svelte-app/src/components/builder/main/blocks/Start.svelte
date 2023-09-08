<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string;
</script>

<div
  class={`start-block ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  <b>{label}</b>
</div>

<style>
  .start-block {
    width: 200px; /* Set width */
    height: 30px; /* Set height */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-top-left-radius: 8px; /* Slightly rounded top-left corner */
  }
</style>
