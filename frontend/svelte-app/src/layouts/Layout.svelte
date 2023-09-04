<script lang="ts">
  import { onMount } from "svelte";
  import themeStore from "../stores/themeStore";
  import Dashboard from "../pages/Dashboard.svelte";
  import Builder from "../pages/Builder.svelte";
  import { derived } from "svelte/store";
  import "boxicons";
  import globalStore from "../stores/globalStore"; // Import globalStore

  let currentView = localStorage.getItem("currentPage") || "Dashboard"; //

  onMount(() => {
    // Subscribe to globalStore to keep track of the current page
    const unsubscribe = globalStore.subscribe((state) => {
      currentView = state.currentPage;
    });

    return () => {
      unsubscribe();
    };
  });

  const themeClassStore = derived(themeStore, ($themeStore) => {
    return $themeStore === "dark" ? "dark-mode" : "light-mode";
  });

  function toggleDarkMode() {
    $themeStore = $themeStore === "dark" ? "light" : "dark";
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      toggleDarkMode();
    }
  }
</script>

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
      <span><b>BUILDER</b></span>
    </div>
    <div class="icons">
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
