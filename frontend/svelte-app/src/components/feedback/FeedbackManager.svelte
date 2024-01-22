<script lang="ts">
  import { feedbackStore } from "../../utilities/feedback/store";
  import ErrorModal from "./ErrorModal.svelte";
  import Toast from "./Toast.svelte";
</script>

<div class="fixed top-0 left-0 w-full h-full z-50">
  <div class="absolute top-12 left-2/4">
    <ErrorModal />
  </div>
  <div class="absolute bottom-6 left-6">
    <Toast />
  </div>
</div>
