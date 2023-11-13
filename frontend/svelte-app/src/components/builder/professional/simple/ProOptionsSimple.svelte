<script lang="ts">
  import FIleOptions from "../../options/FIleOptions.svelte";
</script>

<div class="flex flex-row justify-between">
  <FIleOptions />

  <div class="flex flex-col w-full items-center">
    <div
      class="flex flex-row w-full justify-evenly custom-border-bottom text-lg font-bold"
    >
      <button class="bg-card w-full p-2 custom-border-right hover:bg-card">
        1. Setup
      </button>
      <button class="w-full p-2 custom-border-right hover:bg-card">
        2. Template
      </button>
      <button class=" w-full p-2 custom-border-right hover:bg-card">
        3. Program
      </button>
      <button class=" w-full p-2 hover:bg-card"> 4. Final </button>
    </div>
    <!-- Main Container -->
    <div class="flex flex-row h-full w-full justify-center">
      <!-- Client Options Container -->
      <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
        <span class="font-bold">Client</span>
        <div>Client List + Search</div>
      </div>
      <!-- File Handling Container -->
      <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
        <span class="font-bold">File Handling</span>
        <div>Input for File Name</div>
        <div>Default Name View</div>
      </div>
      <div class="flex flex-col w-1/3 gap-4 p-4 custom-border-right">
        <span class="font-bold">Continue</span>
        <div>Click to save & continue</div>
        <button class="bg-accent2 p-4 font-bold text-lg">Continue</button>
      </div>
    </div>
  </div>
</div>
