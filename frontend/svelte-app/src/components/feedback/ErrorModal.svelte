<script lang="ts">
  import Icon from "@iconify/svelte";

  export let message = "";

  /**
   * TODO: Add transition/animations -  fade out
   * TODO: Add close button
   * TODO: Add details, code
   */
</script>

<div
  class="flex bg-card border-l-8 border-accent2 shadow-lg text-headline font-bold py-2 px-4 gap-4"
>
  <span>{message}</span>
  <Icon icon="octicon:x-12" width="25" height="25" />
</div>
