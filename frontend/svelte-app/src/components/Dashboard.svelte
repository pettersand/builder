<script>
    import Sidebar from './Sidebar.svelte';
    import UserStats from './UserStats.svelte';
    import CardLayout from './CardLayout.svelte';
    import Workout from './Workout.svelte';
</script>
  
<style>
/* Add your TailwindCSS classes or custom styles */
</style>

<main class="flex flex-row flex-grow">
    <div class="flex flex-col w-full">
        <UserStats />
        <div class="flex flex-row flex-grow p-4 gap-2">
            <Workout />
            <CardLayout />
        </div>
    </div>
    <Sidebar />
</main>
