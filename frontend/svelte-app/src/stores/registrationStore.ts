import { writable } from "svelte/store";

interface Step1Data {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Step2Data {
    firstName: string,
    lastName: string,
    dob: string,
    country: string,
    gender: string,
    bioSex: string,
    isTrainer: boolean,
    hasTrainer: boolean,
    terms: boolean,
}

interface RegistrationData {
    step1?: Step1Data;
    step2?: Step2Data;
  }

  const createRegistrationStore = () => {
    const initialState: RegistrationData = {};
    const { subscribe, set, update } = writable(initialState);
  
    return {
      subscribe,
      setStep1Data: (data: Step1Data) => update(state => ({ ...state, step1: data })),
      setStep2Data: (data: Step2Data) => update(state => ({ ...state, step2: data })),
    };
  };
  
  export const registrationStore = createRegistrationStore();