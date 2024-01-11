// utilities/client/store.ts

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

export interface ClientProfile {
    id: number;
    dob: Date;
    phoneNumber: string;
}

export interface ClientData {
    user_id: string; 
    goals: ClientGoal[];
}