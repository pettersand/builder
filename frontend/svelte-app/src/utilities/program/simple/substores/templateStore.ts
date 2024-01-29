// utilities/program/simple/substores/templateStore.ts

import { writable } from "svelte/store";
import type { TrainingDay, ProgramData } from "../types";
import { getCurrentProgramData } from "../store";
import { updateMainStoreFromTemplate } from "../functions";
import { setComponentSaveStatus } from "../../../global/store";

const templateStore = writable<TrainingDay[]>([]);

// Function to initialize the template store
export function initializeTemplateStore() {
  const currentProgramData: ProgramData = getCurrentProgramData();
  if (
    currentProgramData &&
    currentProgramData.programData.trainingDays.length > 0
  ) {
    // Initialize with existing data
    templateStore.set(currentProgramData.programData.trainingDays);
  } else {
    // Optional: Initialize with a default template structure if needed
  }
}

const updateTemplate = (updatedTemplate: TrainingDay[]) => {
  templateStore.update((template) => {
    const newTemplate = { ...template, ...updatedTemplate };
    updateMainStoreFromTemplate(newTemplate);
    setComponentSaveStatus("programData", "Changes Detected");
    return newTemplate;
  });
};

export { templateStore, updateTemplate };
