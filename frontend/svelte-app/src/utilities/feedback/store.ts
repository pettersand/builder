/**
 * TODO: Store to manage state of all feedback types. Visibility, content, and type of feedback.
 * TODO: Define clear guidelines for responses, and how to handle usage in other components.
 */

import { subscribe } from "svelte/internal";
import { writable } from "svelte/store";
import type {
  ErrorMessage,
  ConfirmationMessage,
  SuccessMessage,
} from "./types";

//* Error state - errorMessage, errorCode, errorDetails
//* Confirmation state - confirmationMessage, onConfirm, onCancel
//* Feedback state - feedbackMessage, feedbackType

//* Store methods: setError, clearError, setConfirmation, clearConfirmation, setFeedback, clearFeedback

const defaultState = {
  errorMessage: "",
  errorCode: "",
  errorDetails: "",
  confirmationMessage: "",
  onConfirm: () => {},
  onCancel: () => {},
  feedbackMessage: "",
  feedbackType: "",
};

const createFeedbackStore = () => {
  const { subscribe, set, update } = writable(defaultState);

  const setError = (error: ErrorMessage) => {
    update((state) => ({
      ...state,
      errorMessage: error.errorMessage,
      errorCode: error.errorCode,
      errorDetails: error.errorDetails,
    }));
  };

  const clearError = () => {
    update((state) => ({
      ...state,
      errorMessage: "",
      errorCode: "",
      errorDetails: "",
    }));
  };

  const setConfirmation = (confirmation: ConfirmationMessage) => {
    update((state) => ({
      ...state,
      confirmationMessage: confirmation.confirmationMessage,
      onConfirm: confirmation.onConfirm,
      onCancel: confirmation.onCancel,
    }));
  };

  const clearConfirmation = () => {
    update((state) => ({
      ...state,
      confirmationMessage: "",
      onConfirm: () => {},
      onCancel: () => {},
    }));
  };

  const setSuccess = (success: SuccessMessage) => {
    update((state) => ({
      ...state,
      successMessage: success.successMessage,
    }));
  };

  const clearSuccess = () => {
    update((state) => ({
      ...state,
      successMessage: "",
    }));
  };



  return {
    subscribe,
    setError,
    clearError,
    setConfirmation,
    clearConfirmation,
    setSuccess,
    clearSuccess,
  };
};

export const feedbackStore = createFeedbackStore();
