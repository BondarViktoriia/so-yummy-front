import { Routes, Route } from 'react-router-dom';
import Theme from '../Theme';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';

// import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';

// import CategoriesByName from '../components/Categories/CategoriesByName';
import RecipePage from '../pages/RecipePage';

import StartPage from '../pages/StartPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { SignInPage } from '../pages/SignInPage';
// import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';

import CategoriesPage from '../pages/CategoriesPage';
import AddRecipe from '../pages/AddRecipe';
import MyRecipesPage from '../pages/MyRecipesPage';
import FavoritesPage from '../pages/FavoritesPage';
import ShoppingList from '../pages/ShoppingList';
import SearchPage from '../pages/SearchPage';
import MainPage from '../pages/MainPage';
import ErrorPage from '../pages/ErrorPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { selectToken } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    token && dispatch(getCurrentUser());
  }, [dispatch, token]);
  const theme = useSelector(selectTheme);
  return (
    <Theme themeValue={theme}>
      {/* <Routes>
        <Route path="/" element={<PublicRoute component={<StartPage />} />} />

        <Route
          path="/register"
          element={<PublicRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute component={<SignInPage />} />}
        />

        <Route path="/" element={<SharedLayout />}>
          <Route path="/categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>
          <Route
            path="/add"
            element={<PrivateRoute component={<AddRecipe />} />}
          />
          <Route
            path="/my"
            element={<PrivateRoute component={<MyRecipesPage />} />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
          <Route
            path="/shopping-list"
            element={<PrivateRoute component={<ShoppingList />} />}
          />
          <Route
            path="/search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="/main"
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route
            path="/recipe/:recipeId"
            element={<PrivateRoute component={<RecipePage />} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
      <Routes>
        <Route index element={<PublicRoute component={<StartPage />} />} />

        <Route
          path="/register"
          element={<PublicRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute component={<SignInPage />} />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="main"
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route
            path="categories/:categoryName?"
            element={<PrivateRoute component={<CategoriesPage />} />}
          >
            {/* <Route
              path=":categoryName"
              element={<PrivateRoute component={<CategoriesByName />} />}
            /> */}
            {/* <Route
              path=":beef"
              element={<PrivateRoute component={<CategoriesByName />} />}
            /> */}
          </Route>
          <Route
            path="add"
            element={<PrivateRoute component={<AddRecipe />} />}
          />
          <Route
            path="my"
            element={<PrivateRoute component={<MyRecipesPage />} />}
          />
          <Route
            path="favorite"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
          <Route
            path="shopping-list"
            element={<PrivateRoute component={<ShoppingList />} />}
          />
          <Route
            path="search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="recipe/:recipeId"
            element={<PrivateRoute component={<RecipePage />} />}
          />
          <Route
            path="*"
            element={<PrivateRoute component={<ErrorPage />} />}
          />
        </Route>
      </Routes>
    </Theme>
  );
};
