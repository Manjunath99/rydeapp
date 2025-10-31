import { configureStore } from '@reduxjs/toolkit';
import app from '@/slices/app.slice';
import rides from '@/slices/ridehistory.slice';
import emergencyContact from '@/slices/emergencyConatct.slice';
import config from '@/utils/config';
import { Env } from '@/types/env';
import logger from 'redux-logger';
import {userPersistenceMiddleware} from '@/middleware/userPersistence';

const store = configureStore({
  reducer: {
    app,
    rides,
    emergencyContact,
    // add more store ...
  },
   middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false }).concat(userPersistenceMiddleware);

    if (config.env === Env.dev) {
     middlewares.push(logger);
    }

    return middlewares;
  },
  
  devTools: config.env === Env.dev,
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
