// goals/functions.ts

export function determineCreator(activeClientId: string | null, isTrainer: boolean): string {
    const loggedInUserId = sessionStorage.getItem("userId");
  
    if (isTrainer && activeClientId) {
      return activeClientId; // If the trainer is creating a goal for a client
    } else {
      return loggedInUserId || ""; // If the user is creating a goal for themselves or fallback
    }
  }

  export function calculateTimeToGoal(goalDate: Date): string {
    const today = new Date();
    const diffTime = Math.abs(goalDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} months, ${diffWeeks % 4} weeks, ${diffDays % 7} days`;
}