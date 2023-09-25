// localStorageUtilities.ts

export const setLocalStorageItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  
  export const getLocalStorageItem = (key: string, defaultValue: string) => {
    return localStorage.getItem(key) || defaultValue;
  };