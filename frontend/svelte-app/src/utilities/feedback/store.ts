// utilities/feedback/store.ts

import { writable } from "svelte/store";
import type {
  ErrorMessage,
  ConfirmationMessage,
  SuccessMessage,
  FeedbackState,
} from "./types";

const defaultState: FeedbackState = {
  errorMessage: "",
  errorCode: "",
  errorDetails: "",
  confirmationMessage: "",
  onConfirm: () => {},
  onCancel: () => {},
  successMessage: "",
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


  //! Add discard changes confirmation button, Add details
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
