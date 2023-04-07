import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeReducer } from './theme/themeSlice';
import { shoppingListSlice } from './shoppingList/shoppingListSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    theme: persistReducer(persistConfig, themeReducer),
    shoppingList: shoppingListSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
