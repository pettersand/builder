<!-- LoginRegisterModal.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import themeStore from "../stores/themeStore";
  import modalStore from "../stores/modalStore";
  import {
    handleKeyboardEvent,
    handleClickOutside,
  } from "../utilities/modalUtilities";
  import {
    emailPattern,
    passwordPattern,
  } from "../utilities/validationPatterns";

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

  let usernameTyped = false;
  let emailTyped = false;
  let passwordTyped = false;
  let confirmPasswordTyped = false;
  let usernameValid = false;
  let emailValid = false;
  let passwordValid = false;
  let confirmPasswordValid = false;
  let passwordsMatch = false;

  function checkValidity(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.name === "username") {
      usernameValid = input.checkValidity();
      usernameTyped = true;
    } else if (input.name === "email") {
      emailValid = input.checkValidity();
      emailTyped = true;
    } else if (input.name === "password") {
      passwordValid = input.checkValidity();
      passwordTyped = true;
    } else if (input.name === "confirmPassword") {
      confirmPasswordValid = input.checkValidity();
      confirmPasswordTyped = true;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;
      passwordsMatch = passwordInput.value === input.value;
    }
  }

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

  let step = 1; // To track the current step of registration

  const goToNextStep = () => {
    step++;
  };

  const goToPreviousStep = () => {
    step--;
  };
</script>

{#if $modalStore.showModal}
  <div
    class={`fixed inset-0 flex items-center justify-center z-50 rounded-lg ${
      $themeStore === "dark" ? "bg-dark-overlay" : "bg-light-overlay"
    }`}
    bind:this={modalRef}
  >
    <div
      class={`flex flex-row p-6 w-1/2 rounded-lg ${
        $themeStore === "dark"
          ? "bg-dark-card text-dark-text"
          : "bg-light-card text-light-text"
      }`}
      bind:this={modalBox}
    >
      <button
        class="absolute top-0 right-0 p-2 rounded-full"
        on:click={() => modalStore.closeModal()}
      >
        X
      </button>
      <div class="login-section flex flex-col w-1/2 border-r-2 border-black">
        <h2>Login</h2>
        <!-- Login Fields -->
      </div>
      <div class="register-section flex flex-col w-1/2 items-center">
        {#if step === 1}
          <h2 class="text-center w-full p-2">Register</h2>
          <div class="w-full p-4">
            <label for="username" class="block text-sm font-medium"
              >Username</label
            >
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              minlength="3"
              maxlength="20"
              on:input={checkValidity}
              class={`w-full p-2 mb-2 rounded border ${
                $themeStore === "dark"
                  ? "bg-dark-input text-dark-text"
                  : "bg-light-input text-light-text"
              } ${usernameValid ? "" : "border-red-500"}`}
            />
            {#if !usernameValid && usernameTyped}
              <small class="text-red-500">Username is not valid</small>
            {/if}
            <label for="email" class="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              pattern={emailPattern}
              on:input={checkValidity}
              class={`w-full p-2 mb-2 rounded border ${
                $themeStore === "dark"
                  ? "bg-dark-input text-dark-text"
                  : "bg-light-input text-light-text"
              } ${emailValid ? "" : "border-red-500"}`}
            />
            {#if !emailValid && emailTyped}
              <small class="text-red-500">Email is not valid</small>
            {/if}
            <label for="password" class="block text-sm font-medium"
              >Password</label
            >
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              minlength="6"
              pattern={passwordPattern}
              on:input={checkValidity}
              class={`w-full p-2 mb-2 rounded border ${
                $themeStore === "dark"
                  ? "bg-dark-input text-dark-text"
                  : "bg-light-input text-light-text"
              } ${passwordValid ? "" : "border-red-500"}`}
            />
            <small class="text-gray-500"
              >Must contain an uppercase letter, a lowercase letter, a number,
              and a special character</small
            >
            {#if !passwordValid && passwordTyped}
              <small class="text-red-500">Password is not valid</small>
            {/if}
            <label for="confirmPassword" class="block text-sm font-medium"
              >Confirm Password</label
            >
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              minlength="6"
              pattern={passwordPattern}
              on:input={checkValidity}
              class={`w-full p-2 mb-2 rounded border ${
                $themeStore === "dark"
                  ? "bg-dark-input text-dark-text"
                  : "bg-light-input text-light-text"
              } ${confirmPasswordValid ? "" : "border-red-500"}`}
            />
            {#if !confirmPasswordValid && confirmPasswordTyped && passwordsMatch}
              <small class="text-red-500">Passwords do not match</small>
            {/if}
            <button
              type="submit"
              on:click={goToNextStep}
              disabled={!usernameValid ||
                !emailValid ||
                !passwordValid ||
                !confirmPasswordValid ||
                !passwordsMatch}
              class={`w-full p-2 rounded ${
                $themeStore === "dark"
                  ? "bg-dark-primary text-dark-text"
                  : "bg-light-primary text-light-text"
              } ${
                !usernameValid ||
                !emailValid ||
                !passwordValid ||
                !confirmPasswordValid
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        {:else if step === 2}
        <h2 class="text-center w-full p-2">Additional Information</h2>

        <!-- First Name -->
        <label for="firstName" class="block text-sm font-medium">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          required
          minlength="2"
          maxlength="50"
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Last Name -->
        <label for="lastName" class="block text-sm font-medium">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
          minlength="2"
          maxlength="50"
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Date of Birth -->
        <label for="dob" class="block text-sm font-medium">Date of Birth</label>
        <input
          id="dob"
          name="dob"
          type="date"
          required
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Country -->
        <label for="country" class="block text-sm font-medium">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          required
          minlength="2"
          maxlength="50"
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Gender -->
        <label for="gender" class="block text-sm font-medium">Gender</label>
        <input
          id="gender"
          name="gender"
          type="text"
          placeholder="Gender"
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Biological Sex -->
        <label for="bioSex" class="block text-sm font-medium">Biological Sex</label>
        <input
          id="bioSex"
          name="bioSex"
          type="text"
          placeholder="Biological Sex"
          class={`w-full p-2 mb-2 rounded ${
            $themeStore === "dark"
              ? "bg-dark-input text-dark-text"
              : "bg-light-input text-light-text"
          }`}
        />
      
        <!-- Checkboxes -->
        <div class="flex flex-col">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" name="isTrainer" />
            <span class="ml-2">I am a trainer</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" name="hasTrainer" />
            <span class="ml-2">I have a trainer / I am a client</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" name="terms" required />
            <span class="ml-2">I agree to the Terms of Service</span>
          </label>
        </div>
      
        <!-- Privacy Policy Button -->
        <button
          class={`w-full p-2 mt-4 rounded ${
            $themeStore === "dark"
              ? "bg-dark-secondary hover:bg-dark-secondary2 text-dark-text"
              : "bg-light-secondary hover:bg-light-secondary2 text-light-text"
          }`}
        >
          Privacy Policy
        </button>
            <button
              class={`px-4 py-2 mr-2 rounded-full ${
                $themeStore === "dark"
                  ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
                  : "bg-light-primary hover:bg-light-primary2 text-light-text"
              }`}
              on:click={goToPreviousStep}>Previous</button
            >
            <button
              class={`px-4 py-2 mr-2 rounded-full ${
                $themeStore === "dark"
                  ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
                  : "bg-light-primary hover:bg-light-primary2 text-light-text"
              }`}
              on:click={() => modalStore.closeModal()}
            >
              Register
            </button>
        {/if}
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