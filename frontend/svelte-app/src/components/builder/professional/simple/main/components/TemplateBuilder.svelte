<script lang="ts">
  import { onDestroy } from "svelte";
  import type {
    TemplateVariables,
    TemplateState,
  } from "../../../../../../utilities/program/simple/substores/types";
  import { generateProgramTemplate } from "../../../../../../utilities/program/simple/substores/functions";
  import {
    templateStore,
    updateTemplate,
  } from "../../../../../../utilities/program/simple/substores/templateStore";

  let hasTemplate = false;
  let templateData: TemplateState = { trainingDays: [], sessions: [] };

  const unsubscribe = templateStore.subscribe((value) => {
    templateData = value;
  });

  let formData: TemplateVariables = {
    days: 0,
    sessions: 0,
    exercises: 0,
  };

  // Function to handle form submission and generate template
  function generateTemplate() {
    const templateData = generateProgramTemplate(
      formData.days,
      formData.sessions,
      formData.exercises
    );
    updateTemplate(templateData);
    console.log("Template generated");
  }

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="flex flex-col flex-grow w-2/3 bg-bg justify-start p-3 shadow-xl">
  <div class="text-lg font-bold">Template Builder</div>
  {#if templateData.trainingDays.length > 0 && templateData.sessions.length > 0}
    <!-- Render existing template -->
    Render Template
  {:else}
    <div class="flex flex-col items-center gap-4">
      <h2 class="text-lg font-bold">Let's get started!</h2>
      <p>
        It seems you have yet to create the layout of your workout program.
        Please input your base design, or browse existing layouts.
      </p>
      <!-- Form for creating a new template -->
      <!-- Bind form inputs to formData and on:submit={generateTemplate} -->
      <form
        class="flex flex-col w-1/3 gap-4 p-2"
        on:submit|preventDefault={generateTemplate}
      >
        <input
          bind:value={formData.days}
          class="p-2 border rounded-lg"
          type="number"
          name="days"
          min="1"
          max="7"
          placeholder="# of unique training days"
        />
        <label for="days"
          >Number of unique training days. Typically the number of sessions per
          week where the exercises are not the same.</label
        >
        <input
          bind:value={formData.sessions}
          class="p-2 border rounded-lg"
          type="number"
          name="sessions"
          min="1"
          max="12"
          placeholder="# of sessions per day"
        />
        <label for="sessions"
          >Number of sessions per day. Essentially the number of weeks in total
          for your program.</label
        >
        <input
          bind:value={formData.exercises}
          class="p-2 border rounded-lg"
          type="number"
          name="exercises"
          min="1"
          max="20"
          placeholder="# Exercises per day"
        />
        <label for="exercises"
          >Number of exercises per session. This can be customized once
          generated.</label
        >
        <button
          class="border-4 rounded-lg border-accent2 p-2 font-bold whitespace-nowrap"
          type="submit">Generate Template</button
        >
      </form>
    </div>
  {/if}
</div>
