<script lang="ts">
    
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
      <h1>My App</h1>
    </header>
  
    <main>
      <slot></slot>
    </main>
  
    <footer class="footer">
      <p>Footer Content</p>
    </footer>
  </div>
  

  