<script lang="ts">
  import Icon from "@iconify/svelte";
  import DotsMenu from "../../base/DotsMenu.svelte";

  const handleSelect = (item) => {
    console.log("Selected:", item);
    // Item selection logic here
  };

  const handleKeydown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelect(item);
      event.preventDefault();
    }
  };
</script>

<div class="bg-bg shadow-xl">
  <div class="flex justify-between items-center bg-bg p-2 custom-border-bottom">
    <h2 class="flex gap-2 items-center text-lg p-2 font-bold text-start">
      <Icon
        icon="fluent-emoji-high-contrast:bullseye"
        width="35"
        height="35"
      />Goals
    </h2>
    <DotsMenu on:select={handleSelect}>
      <li
        class="px-4 py-2 hover:bg-card cursor-pointer whitespace-nowrap"
        on:click={() => handleSelect("New Goal")}
        on:keydown={(event) => handleKeydown(event, "New Goal")}
      >
        New Goal
      </li>
      <li
        class="px-4 py-2 hover:bg-card cursor-pointer whitespace-nowrap"
        on:click={() => handleSelect("Edit Goal")}
        on:keydown={(event) => handleKeydown(event, "Edit Goal")}
      >
        Edit Goal
      </li>
      <li
        class="px-4 py-2 hover:bg-card cursor-pointer whitespace-nowrap"
        on:click={() => handleSelect("Manage Goals")}
        on:keydown={(event) => handleKeydown(event, "Manage Goals")}
      >
        Manage Goals
      </li>
    </DotsMenu>
  </div>
  <div
    class="flex flex-col h-2/3 text-center items-center justify-center gap-2 p-4 text-paragraph text-lg font-bold"
  >
    <p class="text-xl text-red-600">Uh oh!</p>
    <p>It looks like you do not have any goals set at the moment!</p>
    <p>But don't worry, we'll get you started.</p>
    <button
      class="bg-accent2 text-headline w-1/4 p-2 rounded-full font-bold mt-4"
      >Create Goal!</button
    >
  </div>
</div>
