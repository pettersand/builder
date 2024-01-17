// utilities/program/simple/functions.ts

import type { ProgramData, BackendProgramData } from "./types";

export const formatProgramDataForBackend = (programData: ProgramData): any => {
    const { programData: frontEndProgramData, ...rest } = programData;
    return {
        ...rest,
        program_data: frontEndProgramData,
    };
};

export const formatProgramDataForFrontend = (backendProgramData: BackendProgramData): ProgramData => {
    const { program_data, ...rest } = backendProgramData;
    return {
        ...rest,
        programData: program_data,
    };
};