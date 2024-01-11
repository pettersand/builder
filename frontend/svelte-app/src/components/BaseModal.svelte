<!-- BaseModal.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import {
    modalStore,
    handleClickOutside,
    handleKeyboardEvent,
  } from "../utilities/modal";

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  let ModalComponent;
  let props = {};

  const closeModal = () => {
    modalStore.closeModal();
  };

  const handleOutsideClick = (event: MouseEvent) =>
    handleClickOutside(event, modalRef, modalBox, closeModal);
  const handleKeyEvent = (event: KeyboardEvent) =>
    handleKeyboardEvent(event, () => {}, closeModal);

  onMount(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyEvent);
    };
  });

  $: modalStore.subscribe(($modal) => {
    ({ props, ModalComponent } = $modal);
  });
</script>

<div
  class="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-50 rounded-lg"
  bind:this={modalRef}
>
  <div class="bg-bg2 text-headline p-4 w-1/3 rounded-lg" bind:this={modalBox}>
    <button
      class="flex w-full justify-end font-bold p-2 rounded-full"
      on:click={closeModal}>X</button
    >
    <svelte:component this={ModalComponent} {...props} />
  </div>
</div>
