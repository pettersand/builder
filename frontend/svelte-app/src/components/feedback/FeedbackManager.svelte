<script lang="ts">
    import { feedbackStore } from "../../utilities/feedback/store";
    import Toast from "./Toast.svelte";
    
</script>

<div class="fixed top-0 left-0 w-full h-full z-50">
    <div class="absolute bottom-5 left-5">
        <Toast />
    </div>

</div>