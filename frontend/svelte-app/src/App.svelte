<script lang="ts">
	import Layout from './components/Layout.svelte';
	export let name: string;
</script>
  
<Layout title="My Svelte App">
<h1>Hello, {name}!</h1>
</Layout>

<style>
/* Add your App-specific styles here */
</style>