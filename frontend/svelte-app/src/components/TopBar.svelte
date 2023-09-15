<script lang="ts">
  import { onMount } from "svelte";
  import messageStore from "../stores/messageStore";

  let message: string = "";
  let type: string = "";
  let visible: boolean = false;

  // Subscribe to the store
  const unsubscribe = messageStore.subscribe(
    (state: { message: string; type: string; visible: boolean }) => {
      ({ message, type, visible } = state);
    }
  );

  onMount(() => {
    return () => {
      unsubscribe();
    };
  });
</script>

{#if visible}
  <div class={`top-bar ${type === "error" ? "bg-red-500" : "bg-green-500"}`}>
    {message}
  </div>
{/if}

<style>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    text-align: center;
    z-index: 1000;
  }
</style>
