export interface BaseGoal {
  id?: number;
  type: "long" | "short";
  goal: string;
}

export interface FrontendGoal extends BaseGoal {
  dueDate: string;
  status?: "active" | "completed" | "abandoned";
  private?: boolean;
  createdBy?: string;
  createdFor?: string;
}

export class Goal implements FrontendGoal {
  id?: number;
  dueDate: string;
  goal: string;
  type: "long" | "short";
  status?: "active" | "completed" | "abandoned";
  private?: boolean;
  createdBy?: string;
  createdFor?: string;

  constructor(
    goal: string,
    type: "long" | "short",
    dueDate: string,
    status?: "active" | "completed" | "abandoned",
    isPrivate?: boolean,
    createdBy?: string,
    createdFor?: string
  ) {
    this.goal = goal;
    this.type = type;
    this.dueDate = dueDate;
    this.status = status;
    this.private = isPrivate;
    this.createdBy = createdBy;
    this.createdFor = createdFor;
  }

  forAPI(): any {
    return {
      content: this.goal,
      type: this.type,
      goal_date: this.dueDate,
      status: this.status,
      private: this.private,
      created_for: this.createdFor,
      user_id: this.createdBy,
    };
  }
}
