// user/API.ts

import api from "../api";

export const checkAuthentication = async (): Promise<any> => {
    try {
        const response = await api.get("/check_auth_status/");
        return response;

    } catch (error) {
        console.error("Error checking authentication status:", error);
        throw error;
    }
};