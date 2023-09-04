<!-- NewProgramOptions.svelte -->
<script lang="ts">
  import type { Level } from "../../../types/index"; // Add this line
  let activeOption = "newProgram"; // Default active option
  export let level: Level; // Use the imported Level type
  import themeStore from "../../../stores/themeStore";
</script>

{#if level === "Beginner"}
  <!-- Beginner content here -->
  <h1>BEGINNER</h1>
{:else if level === "Intermediate"}
  <!-- Intermediate content here -->
  <h1>INTERMEDIATE</h1>
{:else}
  <!-- Expert content here -->
  <h1>EXPERT</h1>
{/if}
