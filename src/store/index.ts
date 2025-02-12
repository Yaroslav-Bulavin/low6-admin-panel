import {
  combineReducers,
  configureStore,
  createSelector,
} from '@reduxjs/toolkit';

import { api } from '@/services/api.service';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const createTypedSelector = createSelector.withTypes<RootState>();
