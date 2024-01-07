<script lang="ts">
  import { onMount } from "svelte";

  // Store imports
  import globalStore from "../stores/globalStore";

  // Component imports
  import DashboardOptions from "../components/dashboard/DashboardOptions.svelte";
  import BuilderOptions from "../components/builder/BuilderOptions.svelte";
  import ProBuilderOptions from "../components/builder/ProBuilderOptions.svelte";
  import ManagementOptions from "../components/management/ManagementOptions.svelte";

  // Local state
  let currentView;

  // Component Maps
  const componentMap = {
    Dashboard: DashboardOptions,
    ProBuilder: ProBuilderOptions,
    Builder: BuilderOptions,
    Management: ManagementOptions,
  };

  // Lifecycle hooks
  onMount(() => {
    const unsubscribeGlobal = globalStore.subscribe((state) => {
      currentView = state.currentPage;
      console.log("Current view in SubOptions:", currentView);
    });

    return () => {
      unsubscribeGlobal();
    };
  });
</script>

<div class="flex flex-col items-start w-full flex-grow">
  {#if componentMap[currentView]}
    <svelte:component this={componentMap[currentView]} />
  {/if}
</div>
