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
    dueDate: backendGoal.goal_date,
    goal: backendGoal.content,
    type: backendGoal.type,
    status: backendGoal.status,
    private: backendGoal.private,
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