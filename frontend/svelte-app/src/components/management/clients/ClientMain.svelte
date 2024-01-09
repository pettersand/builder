<script  lang="ts">
    import { onMount } from "svelte";
    import Clients from "./components/Clients.svelte";
    import ClientData from "./components/ClientData.svelte";

    /**
     * * Client Management main content controller
     * TODO: Data tab for Goal handling + injuries, and notes
    */
</script>

<div class="flex flex-grow gap-4 p-3">

    <!-- Client Booking Container -->
    <div class="flex flex-col flex-grow w-1/5 bg-bg shadow-xl">
      <Clients />
    </div>
  
    <!-- Booking Calendar -->
    <div class="flex flex-col flex-grow w-2/5 bg-bg shadow-xl">
      <div class="flex justify-between bg-bg p-2 custom-border-bottom">
          <h2 class="w-1/4 text-gray-500 text-lg text-center p-2 font-semibold border-r">Programs</h2>
          <h2 class="w-1/4 text-lg text-center p-2 font-semibold border-r">Data</h2>
          <h2 class="w-1/4 text-gray-500 text-lg text-center p-2 font-semibold border-r">Performance</h2>
          <h2 class="w-1/4 text-gray-500 text-lg text-center p-2 font-semibold ">Calendar</h2>
      </div>
      <ClientData />
    </div>
</div>