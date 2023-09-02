<script>
  export let activeOption;
  export let optionToMainComponent;
  import themeStore from "../../stores/themeStore";
</script>

<div
  class={`flex flex-col p-4 ${
    $themeStore === "dark" ? "bg-dark-card" : "bg-light-card2"
  }`}
>
  <svelte:component this={optionToMainComponent[activeOption]} />
</div>
