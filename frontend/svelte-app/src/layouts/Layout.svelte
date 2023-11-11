<!-- Layout.svelte -->
<script lang="ts">
  // Svelte imports
  import { onMount } from "svelte";

  // Component imports
  import Dashboard from "../pages/Dashboard.svelte";
  import Builder from "../pages/Builder.svelte";
  import LoginRegister from "../components/LoginRegisterModal.svelte";
  import BaseModal from "../components/BaseModal.svelte";
  import TopBar from "../components/TopBar.svelte";
  import ErrorModal from "../components/ErrorModal.svelte";
  import SubOptions from "./SubOptions.svelte";

  // Store imports
  import themeStore from "../stores/themeStore";
  import globalStore from "../stores/globalStore";
  import modalStore from "../stores/modalStore";
  import { showMessage } from "../stores/messageStore";

  // Utility and API imports
  import { handleKeyboardEvent } from "../utilities/modalUtilities";
  import { checkAuthentication, logoutUser } from "../utilities/userAPI";

  // Icon imports
  import Icon from "@iconify/svelte";

  // Local state
  let currentView = localStorage.getItem("currentPage") || "Dashboard";
  let currentAuth = localStorage.getItem("isAuthenticated") === "true";

  // Lifecycle hooks
  onMount(() => {
    const unsubscribeGlobal = globalStore.subscribe((state) => {
      currentView = state.currentPage;
      currentAuth = state.isAuthenticated;
    });

    checkAuthStatus();

    return () => {
      unsubscribeGlobal();
    };
  });

  // Functions

  // Check authentication status
  async function checkAuthStatus(): Promise<void> {
    try {
      console.log("Started CheckAuth");
      const response = await checkAuthentication();
      if (response.data.isAuthenticated) {
        console.log("true");
        globalStore.setAuthenticationStatus(true);
      } else {
        console.log("false");
        globalStore.setAuthenticationStatus(false);
      }
    } catch (error) {
      console.error(
        "An error occurred while checking authentication status:",
        error
      );
    }
  }

  function openLoginModal() {
    modalStore.toggleModalWithContent("loginRegister", "Login / Register");
  }

  async function logout(): Promise<void> {
    console.log("User logging out");
    try {
      const data = await logoutUser();
      console.log("User logged out successfully", data);
      globalStore.setAuthenticationStatus(false);
      showMessage("You have been logged out", "confirmation");
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  }

  function toggleDarkMode() {
    if ($themeStore === "dark") {
      $themeStore = "light";
      document.documentElement.classList.remove("dark");
    } else {
      $themeStore = "dark";
      document.documentElement.classList.add("dark");
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    handleKeyboardEvent(event, toggleDarkMode, () => {});
  }
</script>

{#if $modalStore.showModal}
  {#if $modalStore.modalType === "loginRegister"}
    <LoginRegister />
  {:else if $modalStore.modalType === "levelCheck"}
    <BaseModal
      modalContent={$modalStore.modalContent}
      onClose={() => modalStore.toggleModalWithContent("", "")}
      onConfirm={() => {}}
    />
  {/if}
{/if}
<TopBar />
<ErrorModal />

<div class="flex flex-col h-screen font-oswald bg-bg2 text-headline">
  <header
    class="bg-bg p-4 flex justify-between items-center custom-border-bottom"
  >
    <div class="flex flex-row gap-4 items-center">
      <span><b>BUILDER</b></span>

      <!-- Light Switch for dark/light mode  -->
      <div
        class="inline-flex items-center rounded-full cursor-pointer transition-all duration-500 ease-in-out w-16 h-8 shadow-inner border border-card2 bg-card"
        on:click={toggleDarkMode}
        on:keydown={handleKeydown}
        role="button"
        tabindex="0"
      >
        <div
          class="w-7 h-7 rounded-full border-2 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center bg-accent2 border-accent {$themeStore ===
          'dark'
            ? 'translate-x-9'
            : ''} "
        >
          {#if $themeStore === "dark"}
            <Icon icon="ri:moon-fill" class="text-bg" />
          {:else}
            <Icon icon="ri:sun-fill" class="text-bg" />
          {/if}
        </div>
      </div>
    </div>

    <div class="text-red-600">
      <span><b>!! CURRENTLY UNDER DEVELOPMENT !!</b></span>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <!-- Login/Register and Log Out buttons -->
      {#if $globalStore.isAuthenticated}
        <button
          class="font-bold bg-contrast2 p-2 pl-4 pr-4 rounded-full"
          on:click={logout}
        >
          Logout
        </button>
      {:else}
        <button
          class="font-bold bg-accent2 p-2 pl-4 pr-4 rounded-full"
          on:click={openLoginModal}
        >
          Login / Register
        </button>
      {/if}
      <Icon icon="clarity:notification-solid" width="25" height="25" />
      <Icon icon="fa-solid:user-friends" width="25" height="25" />
    </div>
  </header>

  <main class="flex flex-grow">
    <div
      class="flex flex-col justify-between items-start custom-border-right bg-bg"
    >
      <div class="flex flex-col items-start w-full custom-border-bottom">
        <button class="text-gray-400 icon-label hover:bg-card"
          ><Icon icon="ri:admin-fill" width="25" height="25" />Admin</button
        >
        <button
          class="icon-label hover:bg-card {currentView === 'Dashboard'
            ? 'bg-accent2 font-bold'
            : ''}"
          on:click={() => (currentView = "Dashboard")}
          ><Icon
            icon="clarity:dashboard-solid"
            width="25"
            height="25"
          />Dashboard</button
        >
        <button
          class="icon-label hover:bg-card {currentView === 'Builder'
            ? 'bg-accent2 font-bold'
            : ''}"
          on:click={() => (currentView = "Builder")}
          ><Icon
            icon="ion:hammer-sharp"
            width="25"
            height="25"
          />Builder</button
        >

        <button class="text-gray-400 icon-label hover:bg-card"
          ><Icon icon="healthicons:exercise-weights" width="25" height="25" />
          Workout</button
        >
        <button class="text-gray-400 icon-label hover:bg-card"
          ><Icon
            icon="material-symbols:manage-accounts"
            width="25"
            height="25"
          />PT Dashboard</button
        >
        <button class="text-gray-400 icon-label hover:bg-card"
          ><Icon icon="ion:calendar-sharp" width="25" height="25" />PT Session</button
        >
      </div>
      <div class="flex flex-col items-start w-full flex-grow">
        <SubOptions />
      </div>

      <div class="flex flex-col items-start gap-4 p-4 w-full custom-border-top">
        <button class="text-gray-400">Help</button>
        <button class="text-gray-400">Privacy Policy</button>
        <button class="text-gray-400">Contact</button>
        <button class="text-gray-400">Documentation</button>
      </div>
    </div>
    {#if currentView === "Dashboard"}
      <Dashboard />
    {:else if currentView === "Builder"}
      <Builder />
    {/if}
    <slot />
  </main>
</div>
