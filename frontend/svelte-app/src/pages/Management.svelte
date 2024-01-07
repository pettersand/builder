<script lang="ts">
  import { onMount } from "svelte";
  import globalStore from "../stores/globalStore";
  import TrainerStats from "../components/management/dashboard/TrainerStats.svelte";

  onMount(() => {
    globalStore.setCurrentPage("Management");
  });
</script>

<main class="flex flex-row flex-grow bg-bg2">
  <div class="flex flex-col w-full">
    <TrainerStats />
    <div class="flex flex-row flex-grow gap-4 p-3">
      <p>One</p>
      <p>Two</p>
    </div>
  </div>
</main>
