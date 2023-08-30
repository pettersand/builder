<script>
    import themeStore from '../stores/themeStore';
</script>

<!-- Add bg-dark-header-footer or bg-light-header-footer based on the theme -->
<div class={`flex flex-col flex-grow max-w-[350px] h-full p-4 rounded-lg ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
    <h2 class="text-lg font-semibold">Workout</h2>
    <div class="flex-1">
      <p>Content here...</p>
    </div>
  </div>
  