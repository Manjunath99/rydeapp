// src/services/api/index.ts
import { mainApi, uploadApi, authApi } from './apiClient';
import { attachInterceptors } from './interceptors';

[mainApi, uploadApi, authApi].forEach(attachInterceptors);

export { mainApi, uploadApi, authApi };
