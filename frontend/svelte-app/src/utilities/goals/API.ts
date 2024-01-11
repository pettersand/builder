// goals/API.ts

import api from "../api";
import type { Goal } from "./index";

const convertToBackend = (goal: Goal): any => {
  return {
    ...goal,
    goal_date: goal.dueDate,
    content: goal.goal,
    user_id: goal.createdBy,
    created_for: goal.createdFor,
  };
};

const convertToFrontend = (data: any): Goal => {
  return {
    ...data,
    dueDate: data.goal_date,
    goal: data.content,
    createdBy: data.user_id,
    createdFor: data.created_for,
  };
};

export const saveGoal = async (goal: Goal): Promise<Goal> => {
  try {
    const backendGoal = convertToBackend(goal);
    const method = goal.id ? "put" : "post";
    const endpoint = goal.id
      ? `/update_simple_goal/${goal.id}`
      : "/new_simple_goal/";

    const response = await api[method](endpoint, backendGoal);
    return convertToFrontend(response.data);
  } catch (error) {
    console.error("Error saving goal", error);
    throw new Error("Error saving goal.");
  }
};

export const getGoals = async (): Promise<Goal[]> => {
  try {
    const response = await api.get("/get_goals/");
    return response.data.map(convertToFrontend);
  } catch (error) {
    console.error("Error getting goals:", error);
    throw new Error('Error getting goals.');
  }
};

export const deleteUserGoal = async (goalId: number): Promise<void> => {
  try {
    const response = await api.delete(`/delete_goal/${goalId}`);
  } catch (error) {
    console.error("Error deleting goal:", error);
    throw new Error('Error deleting goal.');
  }
};
