<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { debounce } from "../../utilities/global/functions";
  import globalStore from "../../utilities/global/store";

  export let context;

  let saveStatus = "Changes Detected";
  let hasChanges = false;

  
  const autoSave = debounce(() => {
    if (hasChanges) {
      console.log(`Auto-saving changes for context: ${context}...`);
      // Implement context-specific save logic here
      // Update save status accordingly
      globalStore.setSaveStatus("Saved Locally");
      hasChanges = false;
    }
  }, 2000);

  function handleChange() {
    hasChanges = true;
    globalStore.setSaveStatus("Changes Detected");
  }

  let unsubscribe;
  onMount(() => {
    unsubscribe = globalStore.subscribe((state) => {
      saveStatus = state.saveStatus;
    });
  });

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>

<div class="auto-save-status">
    <p>Save Status: {saveStatus}</p>
  </div>
