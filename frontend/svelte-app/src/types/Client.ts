export interface Client {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    status: string;
}

export interface ClientData {
    id: string; // created_for (client, not trainer)
    goal: {
        createdBy: string; // id (trainer)
        type: string;
        goal: string;
        status: string;
        dueDate: Date;
    }
}