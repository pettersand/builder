/**
 * ! MOVED to goals base utility folder
 */

export enum GoalType {
  Long = "long",
  Short = "short",
}

export interface BaseGoal {
  id?: string; // Optional for new goals, required for existing ones
  type: GoalType;
  goal: string;
  dueDate: Date;
  createdBy?: string; // User ID of the creator
  createdFor?: string; // User ID of the goal owner, if different from creator
  private?: boolean; // Only relevant for clients, not trainers
}

