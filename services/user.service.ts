// services/user.service.ts
import { RegisterUserPayload } from '@/types/authPayload/registerPayload';
import { mainApiMethods } from './apis/index';
import { API_URLS } from './apis/urls';
import { User } from '@/types';

export const UserService = {


  login : async (payload: Partial<User>) : Promise<User> => {
    try {
      const data = await mainApiMethods.post<User>(API_URLS.USER.LOGIN, payload);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  register: async (payload: Partial<RegisterUserPayload>): Promise<User> => {
    try {
      const data = await mainApiMethods.post<User>(API_URLS.USER.REGISTER, payload);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },



  
  getProfile: async (): Promise<User> => {
    try {
      const data = await mainApiMethods.get<User>(API_URLS.USER.PROFILE);
      return data; 
    } catch (err) {
      return Promise.reject(err);
    }
  },

  updateProfile: async (payload: Partial<User>): Promise<User> => {
    try {
      console.log('updateProfile', API_URLS.USER.UPDATE, payload);
      const data = await mainApiMethods.put<User>(API_URLS.USER.UPDATE, payload);
      console.log('data', data);
      return data;
    } catch (err) {
       console.log('datadatadata', err);
      return Promise.reject(err);
    }
  },

  deleteAccount: async (): Promise<void> => {
    try {
      await mainApiMethods.delete(API_URLS.USER.UPDATE);
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



