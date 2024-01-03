// goals/types.ts

export interface FrontendGoal {
    dueDate: string;
    goal: string;
    type: "long" | "short";
    status?: "active" | "completed" | "abandoned";
    private?: boolean;
}

export interface BackendGoal {
    goal_date: string;
    content: string;
    type?: "long" | "short";
    status?: "active" | "completed" | "abandoned";
    private?: boolean;
}

export const backToFrontGoal = (backendGoal: BackendGoal): FrontendGoal => ({
    dueDate: backendGoal.goal_date,
    goal: backendGoal.content,
    type: backendGoal.type,
    status: backendGoal.status,
    private: backendGoal.private,
});

export const frontToBackGoal = (frontendGoal: FrontendGoal): BackendGoal => ({ 
    goal_date: frontendGoal.dueDate,
    content: frontendGoal.goal,
    type: frontendGoal.type,
    status: frontendGoal.status,
    private: frontendGoal.private,
});