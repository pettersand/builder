// utilities/program/simple/substores/templateStore.ts

import { writable } from "svelte/store";
import type { TrainingDay, ProgramData } from "../types";
import type { TemplateState } from "./types";
import { getCurrentProgramData } from "../store";
import { updateMainStoreFromTemplate } from "../functions";
import { setComponentSaveStatus } from "../../../global/store";



function getInitialState(): TemplateState {
  const currentProgramData: ProgramData = getCurrentProgramData();
  if (currentProgramData?.programData) {
    return {
      trainingDays: currentProgramData.programData.trainingDays || [],
      sessions: currentProgramData.programData.sessions || [],
    };
  } else {
    return { trainingDays: [], sessions: [] };
  }
}

const templateStore = writable<TemplateState>(getInitialState());

const updateTemplate = (templateData: TemplateState) => {
  templateStore.update((currentTemplate) => {
    const newTemplate = {
      trainingDays: templateData.trainingDays,
      sessions: templateData.sessions,
    };
    updateMainStoreFromTemplate(newTemplate.trainingDays, newTemplate.sessions);
    setComponentSaveStatus("programData", "Changes Detected");
    return newTemplate;
  });
};

export { templateStore, updateTemplate };
