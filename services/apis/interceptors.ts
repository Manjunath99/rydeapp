import { TokenService } from "../token.service";

// src/services/api/interceptors.ts
export function attachInterceptors(apiInstance: any) {
  apiInstance.interceptors.request.use(
  async (config:any) => {

    
    
    const token = await TokenService.gettoken(); 

    console.log("configconfigconfigconfig",token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  //   const curl = [
  //   `curl -X ${config.method?.toUpperCase()}`,
  //   `'${config.baseURL || ''}${config.url}'`,
  //   ...Object.entries(config.headers || {}).map(([k, v]) => `-H '${k}: ${v}'`),
  //   config.data ? `--data '${JSON.stringify(config.data)}'` : '',
  // ].join(' \\\n  ');
  // console.log('🧠 CURL REQUEST:\n', curl);
    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

 

  apiInstance.interceptors.response.use(
  (response:any) => {
    return response; 
  },
  async (error:any) => {
    const originalRequest = error.config;

   
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
       
        // const newToken = await refreshAuthToken();
       
        // await saveToken(newToken);

        
        // originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed', refreshError);
        
      }
    }

    return Promise.reject(error);
  }
);


}
