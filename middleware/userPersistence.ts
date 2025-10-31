import { Middleware } from '@reduxjs/toolkit';
import { setUser } from '@/slices/app.slice';
import { useDataPersist, DataPersistKeys } from '@/hooks/useDataPersist';

const { setPersistData, removePersistData } = useDataPersist();

export const userPersistenceMiddleware: Middleware = store => next => async action => {
  const result = next(action);

  if (setUser.match(action)) {
    const user = store.getState().app.user;
    if (user) {
      await setPersistData(DataPersistKeys.USER, user);
    } else {
      await removePersistData(DataPersistKeys.USER);
    }
  }

  return result;
};
