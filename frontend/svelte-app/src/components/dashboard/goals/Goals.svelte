<script lang="ts">
  import Icon from "@iconify/svelte";
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
    <button>
      <Icon icon="radix-icons:dots-vertical" width="30" height="30" />
    </button>
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
