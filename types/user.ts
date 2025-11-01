import { v4 as uuidv4 } from 'uuid';

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  languagePreference: string;
  createdAt: string;
  updatedAt: string;

  // Authentication & security
  passwordHash: string;
  oauthToken: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;

  // Homepage flags
  isSubscribed: boolean;
  planName: string | null;
  isVerified: boolean;
  hasVehicle: boolean;
  currentLocationId: string | null;

  // Ride preferences
  preferQuietRide: boolean;
  preferACOn: boolean;
  rideTypePreference: 'Standard' | 'Premium' | 'Pool' | string; // extend if needed
  shareRide: boolean;
  paymentPreference: 'Wallet' | 'Cash' | 'Card' | string;
}


export interface AuthResponse {
  accessToken: string;
  message: string;
  user: User;
  refreshToken: string;
}


