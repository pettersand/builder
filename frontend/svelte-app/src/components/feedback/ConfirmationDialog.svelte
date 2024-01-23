<script lang="ts">
  export let message = "";
  export let onConfirm = () => {};
  export let onCancel = () => {};
  export let onAction = () => {};
  export let actionText = "Discard";
</script>

<div class="confirmation-dialog">
  <p>{message}</p>
  <button on:click={onConfirm}>Confirm</button>
  <button on:click={onCancel}>Cancel</button>
  {#if onAction}
    <button on:click={onAction}>{actionText}</button>
  {/if}
</div>
