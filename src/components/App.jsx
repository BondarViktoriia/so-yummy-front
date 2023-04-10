import { Routes, Route } from 'react-router-dom';
import Theme from '../Theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';

import CategoriesByName from '../components/Categories/CategoriesByName';
import RecipePage from '../pages/RecipePage';

// import StartPage from '../pages/StartPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { SignInPage } from '../pages/SignInPage';


import CategoriesPage from '../pages/CategoriesPage';
import AddRecipe from '../pages/AddRecipe';
import MyRecipesPage from '../pages/MyRecipesPage';
import FavoritesPage from '../pages/FavoritesPage';
import ShoppingList from '../pages/ShoppingList';
import SearchPage from '../pages/SearchPage';
import MainPage from '../pages/MainPage';
import ErrorPage from '../pages/ErrorPage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <Theme themeValue={theme}>
      <Routes>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/main"
              component={<RegistrationPage />}
            />
          }
        />
        <Route path="/signin" element={<SignInPage />} />

        <Route path="/" element={<SharedLayout />}>
          <Route path="/categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Theme>
  );

};
