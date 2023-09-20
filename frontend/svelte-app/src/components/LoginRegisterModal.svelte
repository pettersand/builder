<!-- LoginRegisterModal.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";
  import themeStore from "../stores/themeStore";
  import modalStore from "../stores/modalStore";
  import globalStore from "../stores/globalStore";
  import {
    handleKeyboardEvent,
    handleClickOutside,
  } from "../utilities/modalUtilities";
  import { registrationStore } from "../stores/registrationStore";
  import axios from "axios";
  import { showMessage } from "../stores/messageStore";

  let modalRef: HTMLElement;
  let modalBox: HTMLElement;
  let registrationSuccessful = false;
  let step1Successful = false;

  // Form fields
  let step1Data = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  let step2Data = {
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    gender: "",
    bioSex: "",
    isTrainer: false,
    hasTrainer: false,
    terms: false,
  };
  // Subscribe to the store
  const unsubscribe = registrationStore.subscribe((data) => {
    console.log("Subscribed to store, received data:", data);
    if (data.step1) {
      step1Data = data.step1;
    }
  });

  async function sendDataToBackend() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register_step_1/",
        {
          username: step1Data.username,
          email: step1Data.email,
          password: step1Data.password,
          confirmPassword: step1Data.confirmPassword,
        }
      );

      if (response.status === 200) {
        console.log("Data sent successfully", response.data);
        step1Successful = true;
        step++;
        // Navigate to the next step
      }
    } catch (error) {
      console.error("An error occurred while sending data", error);
      if (error.response && error.response.data) {
        let errorMessage = "";
        if (typeof error.response.data === "object") {
          const key = Object.keys(error.response.data)[0];
          errorMessage = error.response.data[key];
        } else {
          errorMessage = error.response.data;
        }
        showMessage(errorMessage, "error");
      } else {
        showMessage("An unknown error occurred", "error");
      }
    }
  }

  async function registerUser() {
    const allData = { step1: step1Data, step2: step2Data };
    console.log("Data frontend sending", allData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register_step_2/",
        allData
      );
      if (response.status === 200) {
        console.log("Registration successful", response.data);
        globalStore.setAuthenticationStatus(true);
        registrationSuccessful = true;
        showMessage("Registration successful!", "confirmation");
        modalStore.closeModal();
      }
    } catch (error) {
      console.error("An error occurred while sending data", error);
      if (error.response && error.response.data) {
        let errorMessage = "";
        if (typeof error.response.data === "object") {
          const key = Object.keys(error.response.data)[0];
          errorMessage = error.response.data[key];
        } else {
          errorMessage = error.response.data;
        }
        showMessage(errorMessage, "error");
      } else {
        showMessage("An unknown error occurred", "error");
      }
    }
  }

  let loginField = "";
  let loginPassword = "";

  function isEmail(str) {
    return str.includes("@");
  }

  interface LoginPayload {
    password: string;
    username?: string;
    email?: string;
  }

  async function handleLogin() {
    const payload: LoginPayload = {
      password: loginPassword,
    };

    if (isEmail(loginField)) {
      payload.email = loginField;
    } else {
      payload.username = loginField;
    }

    try {
      const response = await axios.post("/api/login/", payload);

      if (response.status === 200) {
        globalStore.setAuthenticationStatus(true);
        console.log("Login successful");
        showMessage("Login successful!", "confirmation");
        modalStore.closeModal();
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }

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
    step1Data[input.name] = input.value;
    const emailRegex = new RegExp(
      "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
    );
    const passwordRegex = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");

    if (input.name === "username") {
      usernameValid = input.checkValidity();
      usernameTyped = true;
    } else if (input.name === "email") {
      emailValid = emailRegex.test(input.value);
      emailTyped = true;
    } else if (input.name === "password") {
      passwordValid = passwordRegex.test(input.value);
      passwordTyped = true;
    } else if (input.name === "confirmPassword") {
      confirmPasswordValid = passwordRegex.test(input.value);
      confirmPasswordTyped = true;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;
      passwordsMatch = passwordInput.value === input.value;
    }
  }

  let allRequiredFieldsFilled = false;

  $: {
    allRequiredFieldsFilled =
      step2Data.firstName &&
      step2Data.lastName &&
      step2Data.dob &&
      step2Data.country &&
      step2Data.terms;
  }

  const handleOutsideClick = (event: MouseEvent) => {
    handleClickOutside(event, modalRef, modalBox, () => {
      modalStore.toggleModalWithContent("", "");
    });
  };

  const handleKey = (event: KeyboardEvent) => {
    handleKeyboardEvent(
      event,
      () => {
        // Confirm logic here
      },
      () => {
        modalStore.toggleModalWithContent("", "");
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
    if (step1Successful) {
      step++;
    }
  };

  const goToPreviousStep = () => {
    step--;
  };

  onDestroy(() => {
    unsubscribe();
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
        <h2 class="text-center w-full p-2">Login</h2>
        <div class="w-full p-4">
          <!-- Username or Email Field -->
          <label for="login-username-email" class="block text-sm font-medium">
            Username or Email
          </label>
          <input
            id="loginField"
            name="loginField"
            type="text"
            placeholder="Username or Email"
            bind:value={loginField}
            class={`w-full p-2 mb-2 rounded border ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Password Field -->
          <label for="login-password" class="block text-sm font-medium">
            Password
          </label>
          <input
            id="login-password"
            name="loginPassword"
            type="password"
            placeholder="Password"
            bind:value={loginPassword}
            class={`w-full p-2 mb-2 rounded border ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Remember Me Checkbox -->
          <div class="flex items-center">
            <input id="remember-me" type="checkbox" class="mr-2" />
            <label for="remember-me" class="text-sm">Remember Me</label>
          </div>

          <!-- Forgot Password -->
          <div class="text-right text-sm">
            <span>Forgot Password?</span>
          </div>

          <!-- Login Button -->
          <button
            class="w-full p-2 mt-4 bg-blue-500 text-white rounded"
            on:click={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <div class="register-section flex flex-col w-1/2 items-center">
        {#if step === 1}
          <h2 class="text-center w-full p-2">Register</h2>
          <div class="w-full p-4">
            <label for="username" class="block text-sm font-medium"
              >Username <span class="text-red-500">*</span></label
            >
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              minlength="3"
              maxlength="20"
              value={step1Data.username}
              on:input={checkValidity}
              class={`w-full p-2 mb-2 rounded border ${
                $themeStore === "dark"
                  ? "bg-dark-input text-dark-text"
                  : "bg-light-input text-light-text"
              } ${usernameValid ? "" : "border-red-500"}`}
            />
            {#if !usernameValid && usernameTyped}
              <small class="text-red-500"
                >Username must be between 3 and 20 characters.</small
              >
            {/if}
            <label for="email" class="block text-sm font-medium"
              >Email <span class="text-red-500">*</span></label
            >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={step1Data.email}
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
              >Password <span class="text-red-500">*</span></label
            >
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              minlength="6"
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
              >Confirm Password <span class="text-red-500">*</span></label
            >
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              minlength="6"
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
              on:click={() => {
                if (
                  usernameValid &&
                  emailValid &&
                  passwordValid &&
                  confirmPasswordValid &&
                  passwordsMatch
                ) {
                  sendDataToBackend();
                }
              }}
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
          <label for="firstName" class="block text-sm font-medium"
            >First Name <span class="text-red-500">*</span></label
          >
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            minlength="2"
            maxlength="50"
            bind:value={step2Data.firstName}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Last Name -->
          <label for="lastName" class="block text-sm font-medium"
            >Last Name <span class="text-red-500">*</span></label
          >
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            minlength="2"
            maxlength="50"
            bind:value={step2Data.lastName}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Date of Birth -->
          <label for="dob" class="block text-sm font-medium"
            >Date of Birth <span class="text-red-500">*</span></label
          >
          <input
            id="dob"
            name="dob"
            type="date"
            required
            bind:value={step2Data.dob}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Country -->
          <label for="country" class="block text-sm font-medium"
            >Country <span class="text-red-500">*</span></label
          >
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            required
            minlength="2"
            maxlength="50"
            bind:value={step2Data.country}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          />

          <!-- Gender -->
          <label for="gender" class="block text-sm font-medium">Gender</label>
          <select
            id="gender"
            name="gender"
            bind:value={step2Data.gender}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          >
            <option value="" selected>Choose...</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Trans">Trans</option>
            <option value="Other">Other</option>
          </select>

          <!-- Biological Sex -->
          <label for="bioSex" class="block text-sm font-medium"
            >Biological Sex</label
          >
          <select
            id="bioSex"
            name="bioSex"
            bind:value={step2Data.bioSex}
            class={`w-full p-2 mb-2 rounded ${
              $themeStore === "dark"
                ? "bg-dark-input text-dark-text"
                : "bg-light-input text-light-text"
            }`}
          >
            <option value="" selected>Other</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>

          <!-- Checkboxes -->
          <div class="flex flex-col">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                name="isTrainer"
                bind:checked={step2Data.isTrainer}
              />
              <span class="ml-2">I am a trainer</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                name="hasTrainer"
                bind:checked={step2Data.hasTrainer}
              />
              <span class="ml-2">I have a trainer / I am a client</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                name="terms"
                bind:checked={step2Data.terms}
                required
              />
              <span class="ml-2"
                >I agree to the Terms of Service <span class="text-red-500"
                  >*</span
                ></span
              >
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
            disabled={!allRequiredFieldsFilled}
            class={`px-4 py-2 mr-2 rounded-full ${
              $themeStore === "dark"
                ? "bg-dark-primary hover:bg-dark-primary2 text-dark-text "
                : "bg-light-primary hover:bg-light-primary2 text-light-text"
            } ${
              !allRequiredFieldsFilled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            on:click={registerUser}
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
