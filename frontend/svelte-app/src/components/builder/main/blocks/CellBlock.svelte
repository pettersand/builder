<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
</script>

<div
  class={`flex flex-row justify-between w-40 ${
    $themeStore === "dark"
      ? "bg-dark-primary3 text-dark-text"
      : "bg-light-card text-light-text"
  }`}
>
  <input class="h-8 border text-center w-9" type="text" placeholder="" />
  <input class="h-8 border text-center w-16" type="text" placeholder="" />
  <input class="h-8 border text-center w-16" type="text" placeholder="" />
</div>

<style>

</style>
