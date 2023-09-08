<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string;
</script>

<div
  class={`start-block rounded-tl-md ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
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
    border: 2px solid black;
  }
</style>
