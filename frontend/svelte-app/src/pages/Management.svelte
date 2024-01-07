<script lang="ts">
  import { onMount } from "svelte";
  import globalStore from "../stores/globalStore";
  import { managementState } from "../components/management/managementStore";
  import TrainerStats from "../components/management/dashboard/TrainerStats.svelte";
  import TrainerMain from "../components/management/dashboard/TrainerMain.svelte";
  import ClientStats from "../components/management/clients/ClientStats.svelte";
  import ClientMain from "../components/management/clients/ClientMain.svelte";

  let activeOption: string;
  managementState.subscribe(($managementState) => {
    activeOption = $managementState.activeOption;
  });

  onMount(() => {
    globalStore.setCurrentPage("Management");
  });
</script>

<main class="flex flex-row flex-grow bg-bg2">
  <div class="flex flex-col w-full">
    {#if activeOption === "dashboard"}
    <TrainerStats />
    {:else if activeOption === "clients"}
    <ClientStats />
    {/if}
    <div class="flex flex-row flex-grow gap-4 p-3">
        {#if activeOption === "dashboard"}
        <TrainerMain />
        {:else if activeOption === "clients"}
        <ClientMain />
        {/if}
    </div>
  </div>
</main>
