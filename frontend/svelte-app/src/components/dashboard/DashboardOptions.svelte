<script lang="ts">
  import Icon from "@iconify/svelte";

  /**
   * TODO: Add hover effect, state management
   */
</script>

<div class="flex flex-col items-start w-full flex-grow">
  <button class="text-gray-400 icon-label">
    <Icon icon="clarity:cog-solid" width="25" height="25" />
    Account
  </button>
  <button class="text-gray-400 icon-label">
    <Icon icon="gridicons:stats-alt" width="25" height="25" />
    Statistics
  </button>
  <button class="text-gray-400 icon-label">
    <Icon icon="mingcute:celebrate-fill" width="25" height="25" />
    Goals
  </button>
</div>
