/**
 * TODO: Types for messages, confirmation dialogs, etc
 */

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

