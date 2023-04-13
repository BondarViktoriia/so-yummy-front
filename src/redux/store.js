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
import { favoritesReducer } from './favorites/favoritesSlice';
// import ownRecipesSlice from './ownRecipe/ownRecipesSlice';
import { ownRecipeReducer } from './ownRecipe/ownRecipesSlice';
import { authReducer } from './auth/authSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token', "user", "isLoggedIn"],
};

const themePersistedConfig = {
  key: 'theme',
  storage,
};

const recipePersistedConfig = {
  key: 'recipe',
  storage,
};

const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['ingredients'],
};

const ownRecipePersistConfig = {
  key: 'ownRecipes',
  storage,
};

const persistShoppingListConfig = {
  key: 'shoppingList',
  storage,
};

const persistFavoritesConfig = {
  key: 'favorites',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  theme: persistReducer(themePersistedConfig, themeReducer),
  recipe: persistReducer(recipePersistedConfig, recipeReducer),
  favorites: persistReducer(persistFavoritesConfig, favoritesReducer),
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
