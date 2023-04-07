import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/themeSelectors';
import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const selectedMode = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(selectedMode.mode ?? 'light');
  const changeTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);
  };
  useEffect(() => {
    dispatch(toggleTheme({ mode }));
    window.localStorage.setItem('theme', mode);
  }, [dispatch, mode]);
  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        id="theme-switcher"
        checked={mode === 'dark'}
        onChange={changeTheme}
      />
      <Label>
        <Ball />
      </Label>
    </Switcher>
  );
};
