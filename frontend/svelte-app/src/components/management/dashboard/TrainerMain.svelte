<script lang="ts">
  import { onMount } from "svelte";

  /**
   * * Management dashboard main content controller
   * TODO: Add base design/containers
   */
</script>

<div class="flex flex-grow gap-4 p-3">

  <!-- Client Booking Container -->
  <div class="flex flex-col flex-grow w-1/5 bg-bg shadow-xl">
    <div class="bg-bg p-2 custom-border-bottom">
      <h2 class="text-lg p-2 font-semibold text-start">Clients</h2>
    </div>
    <div class="p-4 text-paragraph">
      <p class="whitespace-nowrap">Booked Week</p>
    </div>
    <div class="p-4 text-paragraph">
      <p class="whitespace-nowrap">Booked Month</p>
    </div>
    <div class="p-4 text-paragraph">
      <p class="whitespace-nowrap">Not Booked</p>
    </div>
  </div>

  <!-- Booking Calendar -->
  <div class="flex flex-col flex-grow w-2/5 bg-bg shadow-xl">
    <div class="bg-bg p-2 custom-border-bottom">
      <h2 class="text-lg p-2 font-semibold text-start">Calendar</h2>
    </div>
  </div>

  <div class="flex flex-col flex-grow w-3/5 gap-4">
    <div class="flex flex-col flex-grow bg-bg shadow-xl">
        <div class="bg-bg p-2 custom-border-bottom">
          <h2 class="text-lg p-2 font-semibold text-start">Daily / Weekly Overview</h2>
        </div>
      </div>
      <div class="flex flex-col flex-grow bg-bg shadow-xl">
        <div class="bg-bg p-2 custom-border-bottom">
          <h2 class="text-lg p-2 font-semibold text-start">Progress & Goals</h2>
        </div>
      </div>
  </div>
</div>
