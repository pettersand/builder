<script lang="ts">
  import type { OptionsComponentMap } from "../../types/index";
  export let activeOption: string;
  export let optionToOptionsComponent: OptionsComponentMap;
  import globalStore from "../../stores/globalStore";
  import themeStore from "../../stores/themeStore";

  $: componentToRender = optionToOptionsComponent[activeOption] as any;
</script>

<div
  class=" flex-grow bg-bg1"
>
  <svelte:component this={componentToRender} level={$globalStore.level} />
</div>
