<script lang="ts">
  import { onMount } from "svelte";
  import {
    handleClickOutside,
    handleKeyboardEvent,
  } from "../../utilities/modal";

  export let message = "";
  export let onConfirm = () => {};
  export let onCancel = () => {};
  export let onAction = () => {};
  export let actionText = "Discard";
  
  //TODO: Add onClose function - cancel the action, reset the store
  let onClose = () => {
    
  };

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  const handleOutsideClick = (event: MouseEvent) =>
    handleClickOutside(event, modalRef, modalBox, onClose);
  const handleKeyEvent = (event: KeyboardEvent) =>
    handleKeyboardEvent(event, () => {}, onClose);

  onMount(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyEvent);
    };
  });
</script>

<div
  bind:this={modalRef}
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
>
  <div
    bind:this={modalBox}
    class="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md"
  >
    <div class="p-4">
      <p class="text-lg">{message}</p>
    </div>
    <div class="flex justify-center gap-8 p-4">
      <button
        class="bg-contrast rounded-xl py-2 px-4 font-bold"
        on:click={onConfirm}>Confirm</button
      >
      {#if onAction}
        <button
          class="bg-card rounded-xl py-2 px-4 font-bold"
          on:click={onAction}>{actionText}</button
        >
      {/if}
      <button
        class="bg-accent2 rounded-xl py-2 px-4 font-bold"
        on:click={onCancel}>Cancel</button
      >
    </div>
  </div>
</div>
