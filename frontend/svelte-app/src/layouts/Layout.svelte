<!-- Layout.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import themeStore from "../stores/themeStore";
  import globalStore from "../stores/globalStore";
  import modalStore from "../stores/modalStore";
  import { handleKeyboardEvent } from "../utilities/modalUtilities";
  import Dashboard from "../pages/Dashboard.svelte";
  import Builder from "../pages/Builder.svelte";
  import LoginRegister from "../components/LoginRegisterModal.svelte";
  import BaseModal from "../components/BaseModal.svelte";
  import TopBar from "../components/TopBar.svelte";
  import ErrorModal from "../components/ErrorModal.svelte";
  import { showMessage } from "../stores/messageStore";

  import { checkAuthentication, logoutUser } from "../utilities/userAPI";

  let currentView = localStorage.getItem("currentPage") || "Dashboard";
  let currentAuth = localStorage.getItem("isAuthenticated") === "true";

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

  onMount(() => {
    const unsubscribeGlobal = globalStore.subscribe((state) => {
      currentView = state.currentPage;
      currentAuth = state.isAuthenticated;
    });

    // Calls the function to check authentication status
    checkAuthStatus();

    return () => {
      unsubscribeGlobal();
    };
  });

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
    ? "bg-gradient-to-tr from-black to-dark-bg2 via-dark-bg text-dark-text layout"
    : "bg-gradient-to-tr from-light-bg to-light-bg2 via-light-bg3 text-light-text layout"}
>
  <header
    class={$themeStore === "dark"
      ? "bg-dark-header-footer bg-opacity-40 border-dark-text header"
      : "bg-light-header bg-opacity-70 header"}
  >
    <div class="menu">
      <button on:click={() => (currentView = "Dashboard")}>Dashboard</button>
      <button on:click={() => (currentView = "Builder")}>Builder</button>
    </div>
    <div class="title">
      <span><b>BUILD'R</b></span>
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
    @apply flex flex-col h-screen font-muli p-6 gap-4;
  }
  .header {
    @apply p-4 flex justify-between items-center border-b rounded-lg;
  }
  .menu,
  .icons {
    @apply flex space-x-4;
  }
  .toggle-container {
    @apply inline-flex items-center rounded-full cursor-pointer transition-all duration-500 ease-in-out w-16 h-8;
  }
  .toggle-ball {
    @apply w-7 h-7 rounded-full border-2 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center;
    padding: 2px;
  }
  .toggle-ball.move {
    @apply translate-x-[124%]; /* Adjust this value */
  }
  .toggle-icon {
    @apply w-7 h-7;
  }
  main {
    @apply flex-grow;
  }
</style>
