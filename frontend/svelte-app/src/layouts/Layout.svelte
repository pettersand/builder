<!-- Layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import themeStore from '../stores/themeStore';
  import { derived } from 'svelte/store';
  import 'boxicons';
  
  export let title: string;

  const themeClassStore = derived(themeStore, ($themeStore) => {
    return $themeStore === 'dark' ? 'dark-mode' : 'light-mode';
  });

  function toggleDarkMode() {
    $themeStore = $themeStore === 'dark' ? 'light' : 'dark';
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDarkMode();
    }
  }
</script>

<style>
  :global(body) {
    @apply flex flex-col min-h-screen font-muli;
  }

  .layout {
    @apply flex flex-col min-h-screen font-muli;
  }
  .header {
    @apply p-4 flex justify-between items-center;
  }
  .footer {
    @apply p-4 flex justify-between items-center;
  }
  .menu, .icons {
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
  footer {
    @apply p-4;
  }
</style>

<div class={$themeStore === 'dark' ? 'bg-dark-bg text-dark-text layout' : 'bg-light-bg text-light-text layout'}>
  <header class={$themeStore === 'dark' ? 'bg-dark-header-footer header' : 'bg-light-header-footer header'}>
    <div class="menu">
      <span>Dashboard</span>
    </div>
    <div class="title">
      <span>Title</span>
    </div>
    <div class="icons">
      <div
        class={$themeStore === 'dark' ? 'toggle-container bg-dark-primary' : 'toggle-container bg-light-primary3'}
        on:click={toggleDarkMode}
        on:keydown={handleKeydown}
        role="button"
        tabindex="0"
      >
        <div class={$themeStore === 'dark' ? 'toggle-ball bg-dark-primary2 border-dark-primary' : 'toggle-ball bg-light-primary3 border-light-primary2 move'}>
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

  <footer class={$themeStore === 'dark' ? 'bg-dark-header-footer footer' : 'bg-light-header-footer footer'}>
    <p>Footer Content</p>
  </footer>
</div>