import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    background: '#FAFAFA',
    footer: '#22252A',
    listItemBcg: '#FFFFFF',
    accentGreen: '#8BAA36',
    mobMenuBgc: '#EBF3D4',

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
    ingredListText: 'rgba(0, 0, 0, 0.8)',
    footerText: '#FAFAFA',
    infoText: '#22252A',

    inputCorrect: '#3CBC81',
    inputWarning: '#F6C23E',
    inputError: '#E74A3B',
    deleteIcon: '#EBF3D4',
    placeholder: '#C4C4C4',

    inputSearchBorder: '1px solid #F0F0F0',
    inputSearchBackground: '#FAFAFA',
    menuIsSelectedBG: 'transparent',
    menuIsFocusedBG: 'transparent',
    menuIsActive: '#8BAA36',
    selectMenuBG: '#D9D9D9',

    paginationShadow: '0px 4px 4px rgba(135, 135, 135, 0.2)',
    arrowColor: 'rgba(169, 169, 169, 0.73)',
    inputText: '#000000',
    addButton: '#22252a',
    iconFollow:'#8baa36'
  },
};

const darkTheme = {
  colors: {
    background: '#1E1F28',
    footer: '#8BAA36',
    listItemBcg: '#2A2C36',
    accentGreen: '#8BAA36',
    mobMenuBgc: '#2A2C36',

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
    footerText: '#FAFAFA',
    infoText: '#FAFAFA',

    ingredItemBcg: '#2A2C36',
    ingredListText: '#FAFAFA',

    inputCorrect: '#3CBC81',
    inputWarning: '#F6C23E',
    inputError: '#E74A3B',
    deleteIcon: '#1E1F28',
    placeholder: '#C4C4C4',

    inputSearchBorder: 'border: 1px solid rgba(250, 250, 250, 0.5)',
    inputSearchBackground: 'transparent',
    menuIsSelectedBG: '#8BAA36',
    menuIsFocusedBG: '#8BAA36',
    menuIsActive: 'transparent',
    selectMenuBG: 'transparent',

    paginationShadow: '0px 4px 4px rgba(31, 30, 30, 0.2)',
    inputText: '#FAFAFA',
    addButton: '#8BAA36',
    iconFollow:'#FAFAFA',
  },
};

const Theme = ({ children, themeValue }) => (
  <ThemeProvider theme={themeValue === 'light' ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
