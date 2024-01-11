// goals/functions.ts

export function determineCreator(activeClientId: string | null, isTrainer: boolean): string {
    const loggedInUserId = sessionStorage.getItem("userId");
  
    if (isTrainer && activeClientId) {
      return activeClientId; // If the trainer is creating a goal for a client
    } else {
      return loggedInUserId || ""; // If the user is creating a goal for themselves or fallback
    }
  }