<script>
    import Sidebar from './Sidebar.svelte';
    import UserStats from './UserStats.svelte';
    import CardLayout from './CardLayout.svelte';
    import Workout from './Workout.svelte';
    import themeStore from '../stores/themeStore';
</script>
  
<style>
/* Add your TailwindCSS classes or custom styles */
</style>

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
