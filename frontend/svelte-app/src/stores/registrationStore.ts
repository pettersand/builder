import { writable } from "svelte/store";

interface Step1Data {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationData {
    step1?: Step1Data;
    // Add step2
  }

  const createRegistrationStore = () => {
    const initialState: RegistrationData = {};
    const { subscribe, set, update } = writable(initialState);
  
    return {
      subscribe,
      setStep1Data: (data: Step1Data) => update(state => ({ ...state, step1: data })),
      // Add step2
    };
  };
  
  export const registrationStore = createRegistrationStore();