<script lang="ts">
  import { feedbackStore } from "../../utilities/feedback/store";

  export let confirmationMessage = "";
  export let onConfirm = () => {};
  export let onCancel = () => {};
  export let onAction = () => {};
  export let actionText = "Discard";
</script>

<div class="confirmation-dialog">
  <p>{confirmationMessage}</p>
  <button on:click={onConfirm}>Confirm</button>
  <button on:click={onCancel}>Cancel</button>
  {#if onAction}
    <button on:click={onAction}>{actionText}</button>
  {/if}
</div>
