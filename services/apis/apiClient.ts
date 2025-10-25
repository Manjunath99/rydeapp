// src/services/api/apiClient.ts
import axios from 'axios';
import { API_URLS } from './urls';


console.log('[##] API_URLS', API_URLS.BASE_URL, );

export const mainApi = axios.create({
  baseURL: API_URLS.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

export const uploadApi = axios.create({
  baseURL: API_URLS.BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

export const authApi = axios.create({
  baseURL: API_URLS.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  }
});
