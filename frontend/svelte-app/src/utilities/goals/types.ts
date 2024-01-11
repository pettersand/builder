// goals/index.ts

export enum GoalType {
  Long = "long",
  Short = "short",
}

export interface Goal {
  id?: string; // Optional for new goals, required for existing ones
  type: GoalType;
  goal: string;
  dueDate: Date;
  status?: string;
  createdBy?: string; // User ID of the creator
  createdFor?: string; // User ID of the goal owner, if different from creator
  private?: boolean; // Only relevant for clients, not trainers
}
