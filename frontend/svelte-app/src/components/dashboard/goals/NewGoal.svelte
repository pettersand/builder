<script lang="ts">
  import {
    handleClickOutside,
    handleKeyboardEvent,
  } from "../../../utilities/modalUtilities";
  import BaseModal from "../../BaseModal.svelte";
</script>

<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <div class="text-lg font-bold">Long Term Goal</div>

  <div class="flex gap-4 w-full">
    <div class="flex items-center gap-4">
      <label for="date" class="whitespace-nowrap">Set Due Date</label>
      <input type="date" class="border border-paragraph rounded-lg p-2" />
    </div>
    <div class="flex flex-col w-full">
      <input
        type="textbox"
        placeholder="Enter Goal"
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
  </div>
</div>
<div class="flex flex-col items-start p-2 gap-4 bg-bg custom-border-bottom">
  <div class="text-lg font-bold">Short Term Goal</div>

  <div class="flex gap-4 w-full">
    <div class="flex items-center gap-4">
      <label for="date" class="whitespace-nowrap">Set Due Date</label>
      <input type="date" class="border border-paragraph rounded-lg p-2" />
    </div>
    <div class="flex flex-col w-full">
      <input
        type="textbox"
        placeholder="Enter Goal"
        class="border border-paragraph rounded-lg p-2"
      />
    </div>
  </div>
</div>
