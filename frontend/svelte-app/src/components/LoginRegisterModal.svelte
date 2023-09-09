<!-- LoginRegisterModal.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import themeStore from "../stores/themeStore";
  import modalStore from "../stores/modalStore";
  import {
    handleKeyboardEvent,
    handleClickOutside,
  } from "../utilities/modalUtilities";

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;

  // Form fields
  let username = "";
  let password = "";
  let confirmPassword = "";
  let email = "";
  let firstName = "";
  let lastName = "";
  let dob = "";
  let country = "";
  let isFitnessProfessional = false;
  let hasPT = false;
  let gender = "";
  let biologicalSex = "";
  let agreeToTerms = false;

  // TODO: Add form submission logic

  const handleOutsideClick = (event: MouseEvent) => {
    handleClickOutside(event, modalRef, modalBox, () => {
      modalStore.toggleModalWithContent("", ""); // Close the modal
    });
  };

  const handleKey = (event: KeyboardEvent) => {
    handleKeyboardEvent(
      event,
      () => {
        // Confirm logic here
      },
      () => {
        modalStore.toggleModalWithContent("", ""); // Close the modal
      }
    );
  };

  onMount(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKey);
    };
  });
</script>

{#if $modalStore.showModal}
  <div
    class={`fixed inset-0 flex items-center justify-center z-50 rounded-lg ${
      $themeStore === "dark" ? "bg-dark-overlay" : "bg-light-overlay"
    }`}
    bind:this={modalRef}
  >
    <div
      class={`auth-modal p-6 w-1/2 rounded-lg ${
        $themeStore === "dark"
          ? "bg-dark-card text-dark-text"
          : "bg-light-card text-light-text"
      }`}
      bind:this={modalBox}
    >
      <button class="absolute top-0 right-0 p-2 rounded-full"> X </button>
      <div class="login-section">
        <!-- Login Fields -->
      </div>
      <div class="register-section">
        <!-- Register Fields -->
      </div>
      <div class="mt-4">
        <button
          class={`px-4 py-2 mr-2 rounded-full ${
            $themeStore === "dark"
              ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
              : "bg-light-primary hover:bg-light-primary2 text-light-text"
          }`}
        >
          Confirm
        </button>
        <button
          class={`px-4 py-2 rounded-full ${
            $themeStore === "dark"
              ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
              : "bg-light-primary hover:bg-light-primary2 text-light-text"
          }`}
        >
          Exit
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .bg-dark-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg-light-overlay {
    background-color: rgba(255, 255, 255, 0.5);
  }
  /* Add your additional styles here */
</style>
