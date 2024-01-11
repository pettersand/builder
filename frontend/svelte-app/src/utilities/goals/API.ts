// goals/API.ts

import api from "../api";
import type { Goal } from "./index";

export const saveGoal = async (goal: Goal): Promise<Goal> => {

    const method = goal.id ? "put" : "post";
    const endpoint = goal.id ? `/goals/${goal.id}` : "/goals";

    const response = await api[method](endpoint, goal);
    return response.data;
}

export const newLongTermGoal = async (goalData: Goal): Promise<any> => {
    try {
      const response = await api.post("/new_simple_goal/", goalData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getGoals = async (): Promise<any> => {
    try { 
      const response = await api.get("/get_goals/");
      return response.data;
    } catch (error) {
      throw error;
    }
  }; 
  
  export const deleteUserGoal = async (goalId: number): Promise<any> => {
    try {
      const response = await api.delete(`/delete_goal/${goalId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }