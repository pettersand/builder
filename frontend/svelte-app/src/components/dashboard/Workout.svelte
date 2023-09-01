<script>
    import themeStore from '../../stores/themeStore';
</script>

<!-- Add bg-dark-header-footer or bg-light-header-footer based on the theme -->
<div class={`flex flex-col flex-grow max-w-[350px] h-full rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card'}`}>
    <div class={`header-bar rounded-t-lg ${$themeStore === 'dark' ? 'bg-dark-card2' : 'bg-light-card2'}`}>
        <h2 class="text-lg font-semibold text-center">Workout</h2>
      </div>
      <div class="p-4">
        <p>Content here...</p>
      </div>
  </div>
  
  <style>
    .header-bar {
      width: 100%;
      padding: 0.5rem 0;
    }
  </style>