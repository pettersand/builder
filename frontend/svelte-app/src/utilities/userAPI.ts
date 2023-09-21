// src/utils/userAPI.ts
import api from "./api";
import type { LoginPayload } from "../types";

export const loginUser = async (payload: Partial<LoginPayload>) => {
  try {
    const response = await api.post("/login/", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};