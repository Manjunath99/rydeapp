// src/services/api/interceptors.ts
export function attachInterceptors(apiInstance: any) {
  apiInstance.interceptors.request.use(
  async (config:any) => {
    console.log("frenjkherbfjfeh");
    console.log('[REQUEST]', {
    method: config.method,
    url: config.baseURL + config.url,
    headers: config.headers,
    data: config.data,
  });
    // const token = await getToken(); 
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
