// utilities/program/simple/functions.ts

import type { ProgramData } from "./types";

export const formatProgramDataForBackend = (programData: ProgramData) => {
    return {
        ...programData,
        program_data: programData.programData,
    };
};