<script lang="ts">
  import { feedbackStore } from "../../utilities/feedback/store";
  import ErrorModal from "./ErrorModal.svelte";
  import Toast from "./Toast.svelte";
  import ConfirmationDialog from "./ConfirmationDialog.svelte";


  /**
   * TODO: Add errorDetails, code, etc
   * TODO: Create confirmation component
   * TODO: Create loading component?
   * TODO: Add toast to confirmation dialog close/click outside
   */
  let errorMessage = "";
  let successMessage = "";
  let confirmationMessage = "";

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
{#if confirmationMessage}
  <div class="absolute top-50 left-2/4">
    <ConfirmationDialog message={confirmationMessage} />
  </div>
{/if}

