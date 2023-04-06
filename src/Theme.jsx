import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    background: '#FAFAFA',
    footer: '#22252A',
    listItemBcg: '#FFFFFF',
    accentGreen: '#8BAA36',

    btnGreen: '#8AA936',
    logoLight: '#EBF3D4',
    paginationArrow: '#rgba(169, 169, 169, 0.73)',
    paginationNumbers: '#656565',

    userLogo: '#D9D9D9',
    themeSwitcher: '#EFEFEF',
    title: '#001833',
    textPrimary: '#3E4462',
    regTextLight: 'rgba(0, 0, 0, 1)',
    darkText: '#23262A',
    greyText: '#7E7E7E',
    ingredItemBcg: '#ebf3d4',

    inputCorrect: '#3CBC81',
    inputWarning: '#F6C23E',
    inputError: '#E74A3B',
    deleteIcon: '#EBF3D4',
    placeholder: '#C4C4C4',
  },
};

const darkTheme = {
  colors: {
    background: '#1E1F28',
    footer: '#8BAA36',
    listItemBcg: '#2A2C36',
    accentGreen: '#8BAA36',

    btnGreen: '#8AA936',
    logoLight: '#EBF3D4',
    paginationArrow: '#rgba(250, 250, 250, 0.6)',
    paginationNumbers: 'rgba(255, 255, 255, 0.6)',
    userLogo: '#D9D9D9',
    themeSwitcher: '#8BAA36',
    title: '#FAFAFA',
    textPrimary: '#FAFAFA',
    regTextLight: '#FAFAFA',
    darkText: '#FAFAFA',
    greyText: 'rgba(250, 250, 250, 0.6)',

    ingredItemBcg: '#2A2C36',

    inputCorrect: '#3CBC81',
    inputWarning: '#F6C23E',
    inputError: '#E74A3B',
    deleteIcon: '#1E1F28',
    placeholder: '#C4C4C4',
  },
};

const Theme = ({ children, themeValue }) => (
  <ThemeProvider theme={themeValue === 'light' ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
