<!-- Layout.svelte -->
<script lang="ts">
  export let title: string;
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
    @apply flex space-x-4;
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
      <!-- Add your icons here -->
      <span class="cursor-pointer">Theme</span>
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