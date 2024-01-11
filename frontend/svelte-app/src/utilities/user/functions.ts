// user/functions.ts

export const saveUserId = (userId: string): void => {
    sessionStorage.setItem("userId", userId);
};

export const getUserId = (): string | null => {
    return sessionStorage.getItem("userId");
};