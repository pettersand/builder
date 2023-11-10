<script lang="ts">
  import themeStore from "../../../../stores/themeStore";
  export let label: string;
</script>

<div
  class={`w-52 h-8 flex justify-center items-center border rounded-tl-md ${
    $themeStore === "dark"
      ? "bg-dark-bg2 text-dark-text"
      : "bg-light-header text-light-text"
  }`}
>
  <b>{label}</b>
</div>

<style>

</style>
