import Theme from '../Theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import Container from "../components/Container/Container";
import {MainPage} from "../pages/MainPage/MainPage.jsx"

export const App = () => {
  const theme = useSelector(selectTheme);
  return( <Theme themeValue={theme}>
    <>
      <Container/>
        <MainPage />  
    </>
  </Theme>)
};
