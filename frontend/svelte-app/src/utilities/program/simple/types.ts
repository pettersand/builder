// utilities/builder/simple/types.ts

export interface ProgramNotes {
  customName: string;
  focus: string;
  phase: string;
  considerations: string;
  notes: string;
}

export interface ProgramData {
  message?: string;
  id?: number;
  status: string;
  programData: {
    programNotes: ProgramNotes;
  };
}
export interface BackendProgramData {
  id?: number;
  status: string;
  program_data: {
    programNotes: ProgramNotes;
  };
}
