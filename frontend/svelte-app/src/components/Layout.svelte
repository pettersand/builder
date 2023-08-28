<!-- Layout.svelte -->
<script lang="ts">
  export let title: string;
  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    // Here you'll eventually add the logic to switch themes
  }
</script>

<style>
  .layout {
    @apply flex flex-col min-h-screen font-muli;
  }
  .header {
    @apply bg-surface-800 text-tertiary-500 p-4 flex justify-between;
  }
  .menu {
    @apply flex space-x-4;
  }
  .icons {
    @apply flex space-x-6;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply bg-primary-500;
  }
  .toggle-label {
    @apply bg-primary-500 w-16 h-7;
  }
  .toggle-container {
    @apply flex items-center justify-center h-7 w-16; /* Centering using flexbox */
  }
  .toggle-checkbox {
    @apply absolute block w-6 h-6 rounded-full bg-primary-600 border-4 border-primary-600 appearance-none cursor-pointer transition-transform duration-300 ease-in-out;
    padding: 2px;
    margin: 2px;
    left: 0; /* Start from the left */
  }
  .toggle-checkbox:checked {
    transform: translateX(2.2rem); /* Move to the other side */
  }
  main {
    @apply bg-surface-900 flex-grow text-tertiary-500;
  }
  footer {
    @apply bg-surface-800 text-tertiary-500 p-4;
  }
</style>

<div class="layout">
  <header class="header">
    <div class="menu">
      <span class="cursor-pointer">Dashboard</span>
    </div>
    <div class="title">
      <h1>{title}</h1>
    </div>
    <div class="icons">
      <button
        class="focus:outline-none"
        aria-label="Toggle dark mode"
        on:click={toggleDarkMode}
      >
        <div class="relative inline-block align-middle select-none transition duration-200 ease-in toggle-container">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="toggle-checkbox"
            bind:checked={isDarkMode}
          />
          <label
            for="toggle"
            class="toggle-label block overflow-hidden h-8 rounded-full bg-primary-300 cursor-pointer"
          ></label>
        </div>
      </button>
      <span class="cursor-pointer">Notification</span>
    </div>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer class="bg-surface-800 text-tertiary-500 p-4">
    <p>Footer Content</p>
  </footer>
</div>