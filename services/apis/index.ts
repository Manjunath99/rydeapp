// src/services/api/index.ts
import { mainApi, uploadApi, authApi } from './apiClient';
import { createApiMethods } from './apiMethods';
import { attachInterceptors } from './interceptors';

[mainApi, uploadApi, authApi].forEach(api =>{ 
    console.log('Attaching interceptors to', api.defaults.baseURL);

  attachInterceptors(api)});

export const mainApiMethods = createApiMethods(mainApi);
export const uploadApiMethods = createApiMethods(uploadApi);
export const authApiMethods = createApiMethods(authApi);
