// src/services/api/apiClient.ts
import axios from 'axios';

export const mainApi = axios.create({
  baseURL: 'https://api.myapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

export const uploadApi = axios.create({
  baseURL: 'https://upload.myapp.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

export const authApi = axios.create({
  baseURL: 'https://auth.myapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  }
});
