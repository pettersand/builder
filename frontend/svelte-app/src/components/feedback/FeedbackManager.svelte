<script lang="ts">
  import { feedbackStore } from "../../utilities/feedback/store";
  import ErrorModal from "./ErrorModal.svelte";
  import Toast from "./Toast.svelte";

  let errorMessage = "";
  let successMessage = "";

  $: {
    feedbackStore.subscribe(($feedback) => {
        errorMessage = $feedback.errorMessage;
        successMessage = $feedback.successMessage;
    });
  }

</script>


    {#if errorMessage}
      <div class="absolute top-12 left-2/4">
        <ErrorModal message={errorMessage} />
      </div>
    {/if}
    {#if successMessage}
      <div class="absolute bottom-6 left-6">
        <Toast message={successMessage} />
      </div>
    {/if}

