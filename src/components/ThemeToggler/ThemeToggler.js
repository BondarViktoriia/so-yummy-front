import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/themeSelectors';
import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const selectedMode = useSelector(selectTheme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Switcher>
      <Label htmlFor="theme-switcher">
        <Checkbox
          type="checkbox"
          id="theme-switcher"
          checked={selectedMode === 'dark'}
                      aria-label='theme-switcher'

          onChange={() => {
            changeTheme();
          }}
        />
        <Ball />
      </Label>
    </Switcher>
  );
};
