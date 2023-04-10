import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import { recipeReducer } from './recipePage/recipeSlice';
import { ownRecipeReducer } from './ownRecipe/ownRecipesSlice';
import { authReducer } from './auth/authSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token'],
};

const themePersistedConfig = {
  key: 'theme',
  storage,
};

const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['ingredients'],
};

const persistShoppingListConfig = {
  key: 'shoppingList',
  storage,
};

const ownRecipePersistConfig = {
  key: 'ownRecipes',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  theme: persistReducer(themePersistedConfig, themeReducer),
  recipe: persistReducer(persistConfig, recipeReducer),
  shoppingList: persistReducer(
    persistShoppingListConfig,
    shoppingListSlice.reducer
  ),
  ingredients: persistReducer(ingredientsPersistConfig, ingredientsReducer),
  ownRecipe: persistReducer(ownRecipePersistConfig, ownRecipeReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
