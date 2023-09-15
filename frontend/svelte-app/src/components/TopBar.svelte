<script lang="ts">
  import { onDestroy } from "svelte";
  import messageStore from "../stores/messageStore";
  import type { MessageState } from "../stores/messageStore";

  let message: MessageState | null = null;

  const unsubscribe = messageStore.subscribe(($message) => {
    message = $message;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="fixed top-0 left-0 w-full">
  {#if message}
    <div
      class={`bg-${
        message.type === "confirmation" ? "success-500" : "error-500"
      } text-white p-4`}
    >
      {message.message}
    </div>
  {/if}
</div>

<style>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    text-align: center;
    z-index: 1000;
  }
</style>
