<script lang="ts">
    import { getCurrentProgramData } from "../../../../../../utilities/program/simple";

    let programNotes;

    $: programNotes = getCurrentProgramData().programData.programNotes;

</script>

<div class="flex flex-col w-2/5 items-start justify-start custom-border-right p-4">
    <h3 class="font-bold">Program Notes</h3>
    <p>Program: {programNotes.customName}</p>
    <p>Focus: {programNotes.focus} Phase: {programNotes.phase}</p>
    <p>Considerations: {programNotes.considerations}</p>
    <p>Notes: {programNotes.notes}</p>
</div>

