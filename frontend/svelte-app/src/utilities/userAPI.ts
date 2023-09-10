// src/utils/userAPI.ts
import { api } from './api';

export const checkExistingUser = async (username: string, email: string) => {
  try {
    const response = await api.post('check-user/', { username, email });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const registerNewUser = async (userData: any) => {
  try {
    const response = await api.post('register/', userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};