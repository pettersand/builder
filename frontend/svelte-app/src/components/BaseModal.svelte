<script lang="ts">
  import { handleKeyboardEvent, handleClickOutside } from "./UtilityFunctions";
  import { onMount } from "svelte";
  import globalStore from "../stores/globalStore";
  import themeStore from "../stores/themeStore";

  let modalContent: string;
  globalStore.subscribe((state) => {
    modalContent = state.modalContent;
  });

  export let onClose: () => void;
  export let onConfirm: () => void;

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  onMount(() => {
    window.addEventListener("click", (event) =>
      handleClickOutside(event, modalRef, modalBox, onClose)
    );
    window.addEventListener("keydown", (event) =>
      handleKeyboardEvent(event, onConfirm, onClose)
    );

    return () => {
      window.removeEventListener("click", (event) =>
        handleClickOutside(event, modalRef, modalBox, onClose)
      );
      window.removeEventListener("keydown", (event) =>
        handleKeyboardEvent(event, onConfirm, onClose)
      );
    };
  });
</script>

<div
  class={`fixed inset-0 flex items-center justify-center z-50 rounded-lg ${
    $themeStore === "dark" ? "bg-dark-overlay" : "bg-light-overlay"
  }`}
  bind:this={modalRef}
>
  <div
    class={`modal p-6 w-1/3 rounded-lg ${
      $themeStore === "dark"
        ? "bg-dark-card text-dark-text"
        : "bg-light-card text-light-text"
    }`}
    bind:this={modalBox}
  >
    <button class="absolute top-0 right-0 p-2 rounded-full" on:click={onClose}>
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
  .bg-dark-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg-light-overlay {
    background-color: rgba(255, 255, 255, 0.5);
  }
  /* Add your dark and light theme styles for card, text, and buttons here */
</style>
