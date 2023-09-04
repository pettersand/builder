<script lang="ts">
  import type { OptionsComponentMap } from "../../types/index"; // Add this line
  export let activeOption: string;
  export let optionToOptionsComponent: OptionsComponentMap;
  import globalStore from "../../stores/globalStore";
  import themeStore from "../../stores/themeStore";

  $: componentToRender = optionToOptionsComponent[activeOption] as any;
</script>

<div
  class={`p-1 flex-grow ${
    $themeStore === "dark" ? "bg-dark-card" : "bg-light-card2"
  }`}
>
  <svelte:component this={componentToRender} level={$globalStore.level} />
</div>
