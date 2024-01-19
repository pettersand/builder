<script lang="ts">
  import { saveProgram } from "../../../../utilities/program/simple/functions";
  import { modalStore } from "../../../../utilities/modal";
  import { mainProgramStore } from "../../../../utilities/program/simple/store";
  import { get as getStoreValue } from "svelte/store";

  const handleSave = () => {
    const programData = getStoreValue(mainProgramStore);
    saveProgram(programData);
    modalStore.closeModal();
  };

  const handleExit = () => {
    modalStore.closeModal();
  };

  const handleContinue = () => {
    modalStore.closeModal();
    mainProgramStore.resetProgram();
  };
</script>

<div class="flex flex-col justify-center items-center font-bold gap-4">
  <div class="mb-4">
    <p class="text-xl text-center text-red-500 mb-4">ATTENTION!</p>
    <p>You have unsaved changes in your currently active program.</p>
    <p>Without action, any unsaved changes will be lost permanently.</p>
  </div>
  <div class="flex gap-4">
    <button class="bg-contrast rounded-lg p-2" on:click={handleSave}
      >Save Changes</button
    >
    <button class="bg-gray-500 rounded-lg p-2" on:click={handleExit}
      >Exit / Cancel</button
    >
    <button class="bg-accent2 rounded-lg p-2" on:click={handleContinue}
      >Continue / Discard</button
    >
  </div>
</div>
