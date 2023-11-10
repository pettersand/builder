<script>
  import { onMount } from "svelte";
  import Sidebar from "../components/dashboard/Sidebar.svelte";
  import UserStats from "../components/dashboard/UserStats.svelte";
  import CardLayout from "../components/dashboard/CardLayout.svelte";
  import Workout from "../components/dashboard/Workout.svelte";
  import themeStore from "../stores/themeStore";
  import globalStore from "../stores/globalStore";

  // Set the current page to 'Dashboard' when the component mounts
  onMount(() => {
    globalStore.setCurrentPage("Dashboard");
  });
</script>

<main class="flex flex-row flex-grow bg-bg">
  <div class="flex flex-col w-full">
    <UserStats />
    <div class="flex flex-row flex-grow gap-4">
      <Workout />
      <CardLayout />
    </div>
  </div>
</main>

<style>

</style>
