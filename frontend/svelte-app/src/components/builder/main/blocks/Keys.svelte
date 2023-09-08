<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`flex justify-between keys-container ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  <div class="key sets">s</div>
  <div class="key reps">r</div>
  <div class="key weight">kg</div>
</div>

<style>
  .key {
    height: 30px; /* 50px */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-weight: bold;
  }
  .sets {
    width: 35px; /* 50px */
  }
  .reps,
  .weight {
    width: 65px; /* 75px */
  }
</style>
