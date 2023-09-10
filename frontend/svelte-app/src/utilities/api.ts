// src/utils/api.ts
export * from './userAPI';
import axios from 'axios';

// Set up base URL and headers, etc.
export const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

