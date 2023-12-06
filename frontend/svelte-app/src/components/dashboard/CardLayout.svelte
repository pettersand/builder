<script lang="ts">
  import Goals from "./goals/Goals.svelte";
</script>

<div class="grid grid-cols-2 flex-grow gap-4">
  <!-- Card 1 -->
  <div class="bg-bg shadow-xl">
    <div class="bg-bg p-2 custom-border-bottom">
      <h2 class="text-lg p-2 font-semibold text-start">Calendar</h2>
    </div>
    <div class="p-4 text-paragraph">
      <p>Content here...</p>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="bg-bg shadow-xl">
    <div class="bg-bg p-2 custom-border-bottom">
      <h2 class="text-lg p-2 font-semibold text-start">Graphs</h2>
    </div>
    <div class="p-4 text-paragraph">
      <p>Content here...</p>
    </div>
  </div>

  <!-- Card 3 -->
  <Goals />

  <!-- Card 4 -->
  <div class="bg-bg shadow-xl">
    <div class="bg-bg p-2 custom-border-bottom">
      <h2 class="text-lg p-2 font-semibold text-start">Progress</h2>
    </div>
    <div class="p-4 text-paragraph">
      <p>Content here...</p>
    </div>
  </div>
</div>

<style>
</style>
