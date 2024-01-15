// utilities/builder/simple/types.ts



export interface ProgramNotes {
    customName: string;
    focus: string;
    phase: string;
    considerations: string;
    notes: string;
}

export interface ProgramData {
    id?: number;
    status: string;
    programData: {
        programNotes: ProgramNotes;
    }
}
