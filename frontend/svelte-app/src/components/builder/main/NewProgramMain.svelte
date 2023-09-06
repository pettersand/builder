<script lang="ts">
  import type { Level } from "../../../types/index"; 
  import Start from "./blocks/Start.svelte";// Add this line
  let activeOption = "newProgram"; // Default active option
  export let level: Level; // Use the imported Level type
  import themeStore from "../../../stores/themeStore";
</script>

<div class="main-content">
  <!-- Add your main content for New Program here -->
  <h2>New Program Main Content</h2>
  <p>This is the main content for the New Program option.</p>
  
  <!-- Render the Start block -->
  <Start />
</div>

<style>
  /* Add styles for the main content component here */
</style>
