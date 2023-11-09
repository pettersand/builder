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

  // Store imports
  import themeStore from "../stores/themeStore";
  import globalStore from "../stores/globalStore";
  import modalStore from "../stores/modalStore";
  import { showMessage } from "../stores/messageStore";

  // Utility and API imports
  import { handleKeyboardEvent } from "../utilities/modalUtilities";
  import { checkAuthentication, logoutUser } from "../utilities/userAPI";

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
    themeStore.update((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
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

<div
  class={$themeStore === "dark"
    ? "bg-dark-bg text-dark-text layout"
    : "bg-light-bg text-light-text layout"}
>
  <header
    class={$themeStore === "dark"
      ? "bg-dark-header-footer border-dark-text header"
      : "bg-light-header header"}
  >
    <div class="title">
      <span><b>BUILDER</b></span>
    </div>
    <div class="icons">
      <!-- Login/Register and Log Out buttons -->
      {#if $globalStore.isAuthenticated}
        <button class="auth-button" on:click={logout}> Logout </button>
      {:else}
        <button class="auth-button" on:click={openLoginModal}>
          Login / Register
        </button>
      {/if}

      <!-- Light Switch for dark/light mode  -->
      <div
        class={$themeStore === "dark"
          ? "toggle-container bg-dark-header border border-dark-primary3"
          : "toggle-container bg-light-bg2 border border-light-card2"}
        on:click={toggleDarkMode}
        on:keydown={handleKeydown}
        role="button"
        tabindex="0"
      >
        <div
          class={$themeStore === "dark"
            ? "toggle-ball bg-dark-primary border-dark-primary3"
            : "toggle-ball bg-light-header border-light-card2 move"}
        >
          {#if $themeStore === "dark"}
            <box-icon name="moon" class="toggle-icon" />
          {:else}
            <box-icon name="sun" class="toggle-icon" />
          {/if}
        </div>
      </div>
    </div>
  </header>

  <main class="flex">
    <div
      class={$themeStore === "dark"
        ? "bg-dark-header-footer border-dark-text navbar"
        : "bg-light-header navbar"}
    >
      <div class="menu">
        <button on:click={() => (currentView = "Dashboard")}>Dashboard</button>
        <button on:click={() => (currentView = "Builder")}>Builder</button>
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

<style>
  :global(body) {
    @apply flex flex-col font-muli;
  }

  .layout {
    @apply flex flex-col h-screen font-muli;
  }

  .header {
    @apply p-4 flex justify-between items-center border-b;
  }

  .navbar {
    @apply p-4 flex-col justify-between items-start;
  }

  .icons {
    @apply flex flex-row gap-4;
  }

  .menu {
    @apply flex flex-col items-start gap-4;
  }

  .toggle-container {
    @apply inline-flex items-center rounded-full cursor-pointer transition-all duration-500 ease-in-out w-16 h-8;
  }

  .toggle-ball {
    @apply w-7 h-7 rounded-full border-2 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center;
    padding: 2px;
  }

  .toggle-ball.move {
    @apply translate-x-[124%];
  }

  .toggle-icon {
    @apply w-7 h-7;
  }
  
  main {
    @apply flex-grow;
  }
</style>
