<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { feedbackStore } from "../../utilities/feedback/store";

  export let message = "";

/**
 * TODO: Add transition/animations -  fade out
*/

  onMount(() => {
    setTimeout(() => {
      feedbackStore.clearSuccess();
    }, 3000);
  });
</script>

<div class="flex bg-card border border-headline text-headline font-bold py-2 px-4 gap-4 rounded-l">
  <Icon icon="iconamoon:check-fill" width="25" height="25" />
  {message}
</div>
