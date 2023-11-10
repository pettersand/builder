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
  <div class="h-8 flex justify-center items-center border w-9">s</div>
  <div class="h-8 flex justify-center items-center border w-16">r</div>
  <div class="h-8 flex justify-center items-center border w-16">kg</div>
</div>

<style>

</style>
