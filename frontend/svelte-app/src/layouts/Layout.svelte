<!-- Layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import themeStore from '../stores/themeStore';
  import 'boxicons';
  
  export let title: string;

  function toggleDarkMode() {
    $themeStore = $themeStore === 'dark' ? 'light' : 'dark';
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDarkMode();
    }
  }

  onMount(() => {
    const unsubscribe = themeStore.subscribe((theme) => {
      document.body.className = theme === 'dark' ? '' : 'light-mode';
    });

    return unsubscribe; // Cleanup
  });
</script>

<style>

  :global(body) {
    @apply bg-surface-900 text-tertiary-500;
  }
  :global(body.light-mode) {
    @apply bg-surface-100 text-surface-900;
  }

  .layout {
    @apply flex flex-col min-h-screen font-muli;
  }
  .header {
    @apply bg-surface-800 text-tertiary-500 p-4 flex justify-between;
  }
  .menu, .icons {
    @apply flex space-x-4;
  }
  .toggle-container {
    @apply inline-flex items-center rounded-full bg-primary-500 cursor-pointer transition-all duration-500 ease-in-out w-16 h-8;
  }
  .toggle-ball {
    @apply w-7 h-7 rounded-full bg-primary-600 border-2 border-primary-600 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center;
    padding: 2px;
  }
  .toggle-ball.move {
  @apply translate-x-[124%]; /* Adjust this value */
  }
  .toggle-icon {
    @apply w-7 h-7 text-white;
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
      <div
        class="toggle-container"
        on:click={toggleDarkMode}
        on:keydown={handleKeydown}
        role="button"
        tabindex="0"
      >
      <div class={`toggle-ball ${$themeStore === 'dark' ? '' : 'move'}`}>
        {#if $themeStore === 'dark'}
          <box-icon name='moon' class="toggle-icon"></box-icon>
        {:else}
          <box-icon name='sun' class="toggle-icon"></box-icon>
        {/if}
      </div>
      </div>
    </div>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer class="bg-surface-800 text-tertiary-500 p-4">
    <p>Footer Content</p>
  </footer>
</div>