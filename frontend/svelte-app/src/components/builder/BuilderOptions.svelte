<script>
  // BuilderOptions.svelte
  let activeOption = "newProgram"; // Default active option
</script>

<div class="">
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
  .vertical-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .active {
    /* Your styles for active button here */
  }
</style>
