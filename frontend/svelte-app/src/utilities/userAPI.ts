// userAPI.ts
import api from "./api";
import type { LoginPayload, Step1Data, Step2Data } from "../types";

interface GoalData {
  goal_date: string;
  content: string;
  type: string;
  private: boolean;
}

export const loginUser = async (payload: Partial<LoginPayload>) => {
  try {
    const response = await api.post("/login/", payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = async (
  step1Data: Step1Data,
  step2Data: Step2Data
) => {
  try {
    const response = await api.post("/register_step_2/", {
      step1: step1Data,
      step2: step2Data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkExistingUser = async (step1Data: Step1Data) => {
  try {
    const response = await api.post("/register_step_1/", {
      step1: step1Data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (): Promise<any> => {
  try {
    const response = await api.post("/logout/");
    return response;
  } catch (error) {
    throw error;
  }
};

export const checkAuthentication = async (): Promise<any> => {
  try {
    const response = await api.get("/check_auth_status/");
    return response;
  } catch (error) {
    throw error;
  }
};

export const newLongTermGoal = async (goalData: GoalData): Promise<any> => {
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