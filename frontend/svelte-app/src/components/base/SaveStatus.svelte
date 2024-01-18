<script>
  import { onMount, onDestroy } from "svelte";
  import globalStore, {
    setComponentSaveStatus,
  } from "../../utilities/global/store";

export let context;

  let saveStatus = "Loading...";

  // Subscribe to the save status store
  const unsubscribeSaveStatus = globalStore.saveStatusStore.subscribe(status => {
    saveStatus = status[context] || "Unknown";
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Changes Detected":
        return "color: orange;";
      case "Saved":
        return "color: green;";
      case "Loading...":
        return "color: grey;";
      default:
        return "color: red;";
    }
  };


  onDestroy(() => {
    unsubscribeSaveStatus();
  });

</script>

<div>
  <h2>Save Status</h2>
  <p style={getStatusStyle(saveStatus)}>{saveStatus}</p>
  <!-- Add any additional UI elements as necessary -->
</div>
