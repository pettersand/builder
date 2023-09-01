<script>
  // BuilderOptions.svelte
  let activeOption = "newProgram"; // Default active option
</script>

<div class="page-header">
  <nav class="vertical-nav">
    <button
      class={activeOption === "newProgram" ? "active" : ""}
      on:click={() => (activeOption = "newProgram")}
    >
      New Program
    </button>
    <button
      class={activeOption === "editProgram" ? "active" : ""}
      on:click={() => (activeOption = "editProgram")}
    >
      Edit Program
    </button>
    <button
      class={activeOption === "savedTemplates" ? "active" : ""}
      on:click={() => (activeOption = "savedTemplates")}
    >
      Saved Templates
    </button>
    <button
      class={activeOption === "preMadePrograms" ? "active" : ""}
      on:click={() => (activeOption = "preMadePrograms")}
    >
      Pre-Made Programs
    </button>
  </nav>
</div>

<style>
  /* Add styles for the vertical navigation bar here */
  .page-header {
    width: 100%; /* Full width */
    height: 80px; /* Reserved height */
    background-color: #f0f0f0; /* Example background color */
    border-bottom: 1px solid #ddd; /* Example border */
    display: flex;
    align-items: center;
    padding: 0 20px; /* Example padding */
  }

  .vertical-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .vertical-nav button.active {
    background-color: #ddd; /* Example active background color */
  }
</style>
