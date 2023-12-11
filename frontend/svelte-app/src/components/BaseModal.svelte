<!-- BaseModal.svelte -->
<script lang="ts">
  import {
    handleKeyboardEvent,
    handleClickOutside,
  } from "../utilities/modalUtilities";
  import { onMount } from "svelte";
  import themeStore from "../stores/themeStore";

  export let modalContent: string = "";
  export let onClose: () => void;
  export let onConfirm: () => void = () => {};

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  const handleOutsideClick = (event: MouseEvent) =>
    handleClickOutside(event, modalRef, modalBox, onClose);
  const handleKeyEvent = (event: KeyboardEvent) =>
    handleKeyboardEvent(event, onConfirm, onClose);

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
  class="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-50 rounded-lg"
  bind:this={modalRef}
>
  <div class="bg-bg2 text-headline p-4 w-1/3 rounded-lg" bind:this={modalBox}>
    <button class="flex w-full justify-end font-bold p-2 rounded-full" on:click={onClose}>
      X
    </button>
    <h2 class="text-2xl mb-4">{modalContent}</h2>
    <slot />
    <div class="mt-4">
      <button
        class={`px-4 py-2 mr-2 rounded-full ${
          $themeStore === "dark"
            ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
            : "bg-light-primary hover:bg-light-primary2 text-light-text"
        }`}
        on:click={onConfirm}
      >
        Confirm
      </button>
      <button
        class={`px-4 py-2 rounded-full ${
          $themeStore === "dark"
            ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
            : "bg-light-primary hover:bg-light-primary2 text-light-text"
        }`}
        on:click={onClose}
      >
        Exit
      </button>
    </div>
  </div>
</div>

<style>
</style>
