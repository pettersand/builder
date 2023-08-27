<!-- Layout.svelte -->
<script lang="ts">
  export let title: string;
</script>

<style>
  .header {
    @apply bg-blue-500 text-white p-4;
  }

  .footer {
    @apply bg-gray-800 text-white p-4;
  }
</style>

<div class="layout">
  <header class="header">
    <h1>{title}</h1> <!-- Include the title prop here -->
  </header>

  <main>
    <slot></slot>
  </main>

  <footer class="footer">
    <p>Footer Content</p>
  </footer>
</div>