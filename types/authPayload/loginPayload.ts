export interface LoginResponse {
  accessToken: string;
   refreshToken: string;
}

export interface Loginrequest {
  password: string;
   phoneNumber: string;
}