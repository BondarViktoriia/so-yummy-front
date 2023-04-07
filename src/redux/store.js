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
import { recipeReducer } from './recipePage/recipeSlice';
import ownRecipesSlice from './ownRecipe/ownRecipesSlice';

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
    ownRecipes: persistReducer(persistConfig, ownRecipesSlice),
    recipe: persistReducer(persistConfig, recipeReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
