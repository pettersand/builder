<script lang="ts">
  import { onDestroy } from "svelte";
  import messageStore, { hideMessage } from "../stores/messageStore";
  import type { MessageState } from "../stores/messageStore";
  import {
    handleKeyboardEvent,
    handleClickOutside,
  } from "../utilities/modalUtilities";

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  let message: MessageState | null = null;

  const unsubscribe = messageStore.subscribe(($message) => {
    if ($message.type === "error") {
      message = $message;
    }
  });

  function closeModal() {
    hideMessage();
    message = null;
  }

  // Listen for clicks outside the modal
  const clickListener = (event: MouseEvent) =>
    handleClickOutside(event, modalRef, modalBox, closeModal);

  // Add event listener for clicks
  document.addEventListener("click", clickListener);

  // Cleanup
  onDestroy(() => {
    unsubscribe();
    document.removeEventListener("click", clickListener);
  });
</script>

{#if message && message.type === "error"}
  <div
    bind:this={modalRef}
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div
      bind:this={modalBox}
      class="bg-white border border-error-500 p-4 rounded shadow-lg w-1/3"
      on:keydown={(e) => handleKeyboardEvent(e, null, closeModal)}
    >
      <div class="flex justify-between items-center">
        <h2 class="text-error-500">Error</h2>
        <button on:click={closeModal} class="text-error-500"> Close </button>
      </div>
      <p>{message.message}</p>
    </div>
  </div>
{/if}

<style>
  /* Add your styles here */
</style>
