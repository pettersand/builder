/**
 * TODO: Store to manage state of all feedback types. Visibility, content, and type of feedback.
 * TODO: Define clear guidelines for responses, and how to handle usage in other components. 
 */

import { subscribe } from "svelte/internal";
import { writable } from "svelte/store";

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
   const { subscribe, set, update } = feedbackStore

    return {
        subscribe, 
        set,
        update,
    };
};

export const feedbackStore = createFeedbackStore();
