<script lang="ts">
  import StepBar from "./components/StepBar.svelte";
  import SmallProgramNotes from "./components/SmallProgramNotes.svelte";
  import CustomTemplate from "./components/CustomTemplate.svelte";
  import BrowseTemplate from "./components/BrowseTemplate.svelte";
  import SaveContinue from "./components/SaveContinue.svelte";
</script>

<div class="flex flex-col w-full items-center">
  <StepBar />
  <div class="flex flex-grow w-full h-full justify-evenly">
    <SmallProgramNotes />
    <CustomTemplate />
    <BrowseTemplate />
    <SaveContinue />
  </div>
</div>
