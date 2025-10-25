// src/services/api/apiMethods.ts
import { AxiosInstance } from 'axios';


export const createApiMethods = (apiInstance: AxiosInstance) => ({
  get: async <T>(url: string, params?: any): Promise<T> => {
    const response = await apiInstance.get<T>(url, { params });
    return response.data;
  },

  post: async <T>(url: string, body?: any, config?: any): Promise<T> => {
    const response = await apiInstance.post<T>(url, body, config);
    return response.data;
  },

  put: async <T>(url: string, body?: any): Promise<T> => {
    const response = await apiInstance.put<T>(url, body);
    return response.data;
  },

  delete: async <T>(url: string, params?: any): Promise<T> => {
    const response = await apiInstance.delete<T>(url, { params });
    return response.data;
  },
});
