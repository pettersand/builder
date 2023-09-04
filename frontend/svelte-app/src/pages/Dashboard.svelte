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

<main class="flex flex-row flex-grow gap-4">
  <div class="flex flex-col w-full gap-4">
    <UserStats />
    <div class="flex flex-row flex-grow gap-4">
      <Workout />
      <CardLayout />
    </div>
  </div>
  <Sidebar />
</main>

<style>
  /* Add your TailwindCSS classes or custom styles */
</style>
