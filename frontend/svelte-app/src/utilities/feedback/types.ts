// utilities/feedback/types.ts

export interface ErrorMessage {
    errorMessage: string;
    errorCode: string;
    errorDetails: string;
}

export interface ConfirmationMessage {
    confirmationMessage: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export interface SuccessMessage {
    successMessage: string;
}

export interface FeedbackState {
    errorMessage: string;
    errorCode: string;
    errorDetails: string;
    confirmationMessage: string;
    onConfirm: () => void;
    onCancel: () => void;
    successMessage: string;
}