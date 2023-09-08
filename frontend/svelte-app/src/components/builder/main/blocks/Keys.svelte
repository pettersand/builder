<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`flex justify-between keys-container ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text border-dark-bg"
      : "bg-light-header text-light-text border-light-bg2"
  }`}
>
  <div class="key sets">S</div>
  <div class="key reps">R</div>
  <div class="key weight">kg</div>
</div>

<style>
  .key {
    height: 30px; /* 50px */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    font-weight: bold;
  }
  .sets {
    width: 30px; /* 50px */
  }
  .reps,
  .weight {
    width: 60px; /* 75px */
  }
</style>
