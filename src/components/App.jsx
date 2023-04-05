import { Routes, Route } from 'react-router-dom';
import Theme from '../Theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import Container from '../components/Container/Container';
import RecipePage from '../pages/RecipePage';

export const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <Theme themeValue={theme}>
      <></>
    </Theme>
  );
};
