<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const dispatch = createEventDispatcher();
  let dropdown;
  let show = false;

  const toggleDropdown = () => {
    show = !show;
  };

  const closeDropdown = () => {
    show = false;
  };

  const handleKeydown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      handleItemClick(item);
      event.preventDefault();
    }
  };

  onMount(() => {
    const handleClickOutside = (event) => {
      if (!dropdown.contains(event.target)) {
        closeDropdown();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const handleItemClick = (item) => {
    dispatch("select", item);
    closeDropdown();
  };
</script>

<div class="relative" bind:this={dropdown}>
  <button on:click={toggleDropdown} on:keydown={toggleDropdown}>
    <Icon icon="radix-icons:dots-vertical" width="30" height="30" />
  </button>
  {#if show}
    <div
      class="absolute right-0 mt-2 bg-bg2 border border-paragraph rounded shadow-xl z-10"
    >
      <ul class="text-paragraph">
        <slot />
      </ul>
    </div>
  {/if}
</div>
