// services/user.service.ts
import { RegisterUserPayload } from '@/types/authPayload/registerPayload';
import { mainApi } from './apis/apiClient';
import { API_URLS } from './apis/urls';
import { User } from '@/types';

export const UserService = {


  login : async (payload: Partial<User>): Promise<User> => {
    try {
      const data = await mainApi.post<User>(API_URLS.USER.LOGIN, payload);
      return data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  register: async (payload: Partial<RegisterUserPayload>): Promise<User> => {
    try {
      const data = await mainApi.post<User>(API_URLS.USER.REGISTER, payload);
      return data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },



  
  getProfile: async (): Promise<User> => {
    try {
      const data = await mainApi.get<User>(API_URLS.USER.PROFILE);
      return data.data; 
    } catch (err) {
      return Promise.reject(err);
    }
  },

  updateProfile: async (payload: Partial<User>): Promise<User> => {
    try {
      console.log('updateProfile', API_URLS.USER.UPDATE, payload);
      const data = await mainApi.put<User>(API_URLS.USER.UPDATE, payload);
      console.log('data', data);
      return data.data;
    } catch (err) {
       console.log('datadatadata', err);
      return Promise.reject(err);
    }
  },

  deleteAccount: async (): Promise<void> => {
    try {
      await mainApi.delete(API_URLS.USER.UPDATE);
    } catch (err) {
      return Promise.reject(err);
    }
  },

  // Mock / async function for testing without API
  getUserAsync: async (): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { name: 'Test User', email: 'testuser@test.com' };
  },


};



