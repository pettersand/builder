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
  <div class="key sets">sets</div>
  <div class="key reps">reps</div>
  <div class="key weight">weight</div>
</div>

<style>
  .key {
    height: 50px; /* 50px */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    font-weight: bold;
  }
  .sets {
    width: 50px; /* 50px */
  }
  .reps,
  .weight {
    width: 75px; /* 75px */
  }
</style>
