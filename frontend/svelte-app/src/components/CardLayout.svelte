<script>
    import { onMount } from 'svelte';
    let theme = 'light'; // Default theme
  
    onMount(() => {
      // Get the current theme from local storage or default to 'light'
      theme = localStorage.getItem('theme') || 'light';
    });
  </script>
  
  <div class="grid grid-cols-2 gap-4 flex-grow">
    <!-- Card 1 -->
    <div class={`card p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-card' : 'bg-light-card'}`}>
        <h2 class="text-lg font-semibold">Calendar</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 2 -->
    <div class={`card p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-card' : 'bg-light-card'}`}>
        <h2 class="text-lg font-semibold">Graphs</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 3 -->
    <div class={`card shadow-md p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-card' : 'bg-light-card'}`}>
        <h2 class="text-lg font-semibold">Goals</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 4 -->
    <div class={`card p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-card' : 'bg-light-card'}`}>
        <h2 class="text-lg font-semibold">Progress</h2>
        <p>Content here...</p>
      </div>
  </div>