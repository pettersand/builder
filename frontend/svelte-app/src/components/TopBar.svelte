<script lang="ts">
  import { onDestroy } from "svelte";
  import messageStore from "../stores/messageStore";
  import type { MessageState } from "../stores/messageStore";
  import { hideMessage } from "../stores/messageStore";

  let message: MessageState | null = null;

  /**
   * * Handles confirmation messages
    */

  const unsubscribe = messageStore.subscribe(($message) => {
    message = $message;
    if (message && message.type === "confirmation") {
      setTimeout(() => {
        hideMessage();
      }, 1500); // Hides after 3 seconds
    }
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#if message && message.visible}
<div class="fixed top-0 left-0 w-full z-50">
    <div class={`bg-success-500 opacity-90 text-white text-xl p-4 text-center`}>
      {message.message}
    </div>
</div>
{/if}

<style>
</style>
