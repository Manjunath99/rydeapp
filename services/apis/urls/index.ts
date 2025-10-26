import Constants from 'expo-constants';

const ENV = Constants.expoConfig?.extra?.env || 'dev';

const BASE_URLS: Record<string, string> = {
  dev: 'https://21q7l15jib.execute-api.ap-south-1.amazonaws.com/dev',
  staging: 'https://staging.myapp.com',
  prod: 'https://api.myapp.com',
};

const BASE_URL = BASE_URLS[ENV] || BASE_URLS.dev;

console.log(`[##] ENV: ${ENV} | BASE_URL: ${BASE_URL}`);

export const API_URLS = {
  BASE_URL,

  USER: {
    PROFILE: `/api/auth/profile`,
    UPDATE: `/api/auth/update`,
    DELETE: `/api/auth/delete`,
    LOGIN: `/api/auth/login`,
    REGISTER: `/api/auth/register`,
  },

  RIDE: {
    LIST: `${BASE_URL}/api/rideHistory/list`,
    BOOK: `${BASE_URL}/api/rideHistory/book`,
    CANCEL: `${BASE_URL}/api/rideHistory/cancel`,
  },

  VEHICLE: {
    LIST: `${BASE_URL}/api/vehicles/list`,
    ADD: `${BASE_URL}/api/vehicles/add`,
    UPDATE: `${BASE_URL}/api/vehicles/update`,
    DELETE: `${BASE_URL}/api/vehicles/delete`,
  },

  EMERGENCY_CONTACT: {
    LIST: `${BASE_URL}/api/emergencyContacts/list`,
    ADD: `${BASE_URL}/api/emergencyContacts/add`,
    UPDATE: `${BASE_URL}/api/emergencyContacts/update`,
    DELETE: `${BASE_URL}/api/emergencyContacts/delete`,
  },

  SAVED_ROUTE: {
    LIST: `${BASE_URL}/api/savedRoutes/list`,
    ADD: `${BASE_URL}/api/savedRoutes/add`,
    UPDATE: `${BASE_URL}/api/savedRoutes/update`,
    DELETE: `${BASE_URL}/api/savedRoutes/delete`,
  },

  LICENSE: {
    LIST: `${BASE_URL}/api/licenses/list`,
    ADD: `${BASE_URL}/api/licenses/add`,
    UPDATE: `${BASE_URL}/api/licenses/update`,
    DELETE: `${BASE_URL}/api/licenses/delete`,
  },
};
