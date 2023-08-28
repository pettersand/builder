<script>
    import { onMount } from 'svelte';
    let theme = 'light'; // Default theme
  
    onMount(() => {
      // Get the current theme from local storage or default to 'light'
      theme = localStorage.getItem('theme') || 'light';
    });
</script>

<!-- Add bg-dark-header-footer or bg-light-header-footer based on the theme -->
<div class={`flex flex-col flex-grow max-w-[350px] h-full p-4 rounded-lg border border-dark-primary ${theme === 'dark' ? 'bg-dark-header-footer' : 'bg-light-header-footer'}`}>
    <h2 class="text-lg font-semibold">Workout</h2>
    <div class="flex-1">
      <p>Content here...</p>
    </div>
  </div>
  