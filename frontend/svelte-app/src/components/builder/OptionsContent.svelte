<script>
  export let activeOption;
  export let optionToOptionsComponent;
  import themeStore from "../../stores/themeStore";
</script>

<div
  class={`p-4 ${$themeStore === "dark" ? "bg-dark-card" : "bg-light-card2"}`}
>
  <svelte:component this={optionToOptionsComponent[activeOption]} />
</div>
