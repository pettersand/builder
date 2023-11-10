<script lang="ts">
  import themeStore from "../../stores/themeStore";
  import globalStore from "../../stores/globalStore";
  import type { MainComponentMap } from "../../types/index";
  export let activeOption: string;
  export let optionToMainComponent: MainComponentMap;

  $: componentToRender = optionToMainComponent[activeOption] as any;
</script>

<div
  class="flex rounded-md mt-4 p-4 bg-bg2" 
>
<svelte:component this={componentToRender} level={$globalStore.level} />
</div>
