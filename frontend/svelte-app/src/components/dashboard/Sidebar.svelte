<script>
    import themeStore from '../../stores/themeStore';
</script>
  

  <aside class={`sidebar h-full min-w-[200px] rounded-lg flex flex-col flex-shrink-0 ${$themeStore === 'dark' ? 'bg-dark-card' : 'bg-light-card2'}`}>
    <section class={`account-section flex-1 p-4 border-b ${$themeStore === 'dark' ? 'border-dark-text' : 'border-light-text'}`}>
      <h2 class="text-lg font-semibold">Account</h2>
      <!-- Account details go here -->
    </section>
    
    <section class="social-section flex-1 p-2 flex flex-col flex-wrap">
        <h2 class="text-lg font-semibold w-full mb-2">Color Palette</h2>
      
        <!-- Dark Mode Colors -->
        <div class="color-box bg-dark-bg flex items-center justify-center text-white">
          dark-bg
        </div>
        <div class="color-box bg-dark-bg2   flex items-center justify-center text-white">
          dark-bg2
        </div>
        <div class="color-box bg-dark-header  flex items-center justify-center text-white ">
          dark-header-footer
        </div>
        <div class="color-box bg-dark-text  flex items-center justify-center text-white ">
          dark-text
        </div>
        <div class="color-box bg-dark-card  flex items-center justify-center text-white ">
          dark-card
        </div>
        <div class="color-box bg-dark-primary   flex items-center justify-center text-white ">
          dark-primary
        </div>
        <div class="color-box bg-dark-primary2   flex items-center justify-center text-white ">
          dark-primary2
        </div>
        <div class="color-box bg-dark-primary3   flex items-center justify-center text-white  border-b mb-2">
          dark-primary3
        </div>
      
        <!-- Light Mode Colors -->
        <div class="color-box bg-light-bg   flex items-center justify-center text-white mt-2">
          light-bg
        </div>
        <div class="color-box bg-light-bg2   flex items-center justify-center text-white ">
          light-bg2
        </div>
        <div class="color-box bg-light-bg3   flex items-center justify-center text-white ">
          light-bg3
        </div>
        <div class="color-box bg-light-header  flex items-center justify-center text-white ">
          light-header-footer
        </div>
        <div class="color-box bg-light-text  flex items-center justify-center text-white ">
          light-text
        </div>
        <div class="color-box bg-light-card   flex items-center justify-center text-black ">
          light-card
        </div>
        <div class="color-box bg-light-card2   flex items-center justify-center text-black ">
          light-card2
        </div>
        <div class="color-box bg-light-primary   flex items-center justify-center text-white ">
          light-primary
        </div>
        <div class="color-box bg-light-primary2   flex items-center justify-center text-white ">
          light-primary2
        </div>
        <div class="color-box bg-light-primary3   flex items-center justify-center text-white ">
          light-primary3
        </div>
      </section>
      

  </aside>