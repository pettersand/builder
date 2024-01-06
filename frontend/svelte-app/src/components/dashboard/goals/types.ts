// goals/types.ts

export interface FrontendGoal {
    id?: number;
    dueDate: string;
    goal: string;
    type: "long" | "short";
    status?: "active" | "completed" | "abandoned";
    private?: boolean;
}

export interface BackendGoal {
    id?: number;
    goal_date: string;
    content: string;
    type?: "long" | "short";
    status?: "active" | "completed" | "abandoned";
    private?: boolean;
}

export const backToFrontGoal = (backendGoal: BackendGoal): FrontendGoal => ({
    id: backendGoal.id,
    type: backendGoal.type,
    goal: backendGoal.content,
    dueDate: backendGoal.goal_date,
    status: backendGoal.status,
});

export const frontToBackGoal = (frontendGoal: FrontendGoal): BackendGoal => {
    const backendGoal: BackendGoal = {
      goal_date: frontendGoal.dueDate,
      content: frontendGoal.goal,

      // Only includes 'type' and 'status' if they are defined in frontendGoal
      ...(frontendGoal.type && { type: frontendGoal.type }),
      ...(frontendGoal.status && { status: frontendGoal.status }),
    };
    return backendGoal;
  };