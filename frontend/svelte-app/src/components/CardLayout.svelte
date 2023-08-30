<script>
    import themeStore from '../stores/themeStore';
</script>
  
  <div class="grid grid-cols-2 gap-4 flex-grow">
    <!-- Card 1 -->
    <div class={`card p-4 rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
        <h2 class="text-lg font-semibold">Calendar</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 2 -->
    <div class={`card p-4 rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
        <h2 class="text-lg font-semibold">Graphs</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 3 -->
    <div class={`card p-4 rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
        <h2 class="text-lg font-semibold">Goals</h2>
        <p>Content here...</p>
      </div>
  
    <!-- Card 4 -->
    <div class={`card p-4 rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
        <h2 class="text-lg font-semibold">Progress</h2>
        <p>Content here...</p>
      </div>
  </div>