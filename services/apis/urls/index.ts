import Constants from 'expo-constants';

const ENV = Constants.expoConfig?.extra?.env || 'dev';

const BASE_URLS: Record<string, string> = {
  dev: 'https://21q7l15jib.execute-api.ap-south-1.amazonaws.com/dev',
  staging: 'https://staging.myapp.com',
  prod: 'https://api.myapp.com',
};

const BASE_URL = BASE_URLS[ENV] || BASE_URLS.dev;

export const API_URLS = {
  BASE_URL,

  USER: {
    LOGIN: `/api/auth/login`,
    REGISTER: `/api/auth/register`,
    CURRENT: `/api/auth/current`,
    UPDATE: `/api/auth/update`,
    DELETE: `/api/auth/delete`,
  },
  RIDE: {
    LIST: `/api/rideHistory/list`,
    BOOK: `/api/rideHistory/book`,
    CANCEL: `/api/rideHistory/cancel`,
  },

  VEHICLE: {
    LIST: `/api/vehicles/list`,
    ADD: `/api/vehicles/add`,
    UPDATE: `/api/vehicles/update`,
    DELETE: `/api/vehicles/delete`,
  },

  EMERGENCY_CONTACT: {
    LIST: `/api/emergencyContacts`,
    ADD: `/api/emergencyContacts`,
    UPDATE: `/api/emergencyContacts/update`,
    DELETE: `/api/emergencyContacts/delete`,
  },

  SAVED_ROUTE: {
    LIST: `/api/savedRoutes/list`,
    ADD: `/api/savedRoutes/add`,
    UPDATE: `/api/savedRoutes/update`,
    DELETE: `/api/savedRoutes/delete`,
  },

  LICENSE: {
    LIST: `/api/licenses/list`,
    ADD: `/api/licenses/add`,
    UPDATE: `/api/licenses/update`,
    DELETE: `/api/licenses/delete`,
  },
};
