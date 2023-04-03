import Theme from '../Theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';

export const App = () => {
  const theme = useSelector(selectTheme);
  return <Theme themeValue={theme}>
    <></>
  </Theme>;
};
