<script lang="ts">
  import { onMount } from "svelte";



  // Store imports
  import globalStore from "../stores/globalStore";

  // Component imports
    import DashboardOptions from "../components/dashboard/DashboardOptions.svelte";
    import BuilderOptions from "../components/builder/BuilderOptions.svelte";

  

  // Local state
  let currentView = localStorage.getItem("currentPage") || "Dashboard";

  // Component Maps
  const componentMap = {
    Dashboard: DashboardOptions,
    Builder: BuilderOptions,
  };

  // Lifecycle hooks
  onMount(() => {
    const unsubscribeGlobal = globalStore.subscribe((state) => {
      currentView = state.currentPage;
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
