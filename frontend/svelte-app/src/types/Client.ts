export interface Client {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    status: string;
}

export interface ClientGoal {
    id: number;
    createdBy: string; // id (trainer)
    type: string;
    goal: string;
    status: string;
    dueDate: Date;
}


export interface ClientData {
    user_id: string; // created_for (client, not trainer)
    goals: ClientGoal[];
}