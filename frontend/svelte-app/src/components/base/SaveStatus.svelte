<script>
  import { onMount, onDestroy } from "svelte";
  import globalStore, {
    setComponentSaveStatus,
  } from "../../utilities/global/store";

  let saveStatus = "Loading...";

  // Subscribe to the save status store
  const unsubscribeSaveStatus = globalStore.saveStatusStore.subscribe(status => {
    saveStatus = status.programData; 
  });

  // Cleanup
  onDestroy(() => {
    unsubscribeSaveStatus();
  });

  // Additional logic here as needed
</script>

<div>
  <h2>Program Save Status</h2>
  <p>{saveStatus}</p>
  <!-- Add any additional UI elements as necessary -->
</div>
