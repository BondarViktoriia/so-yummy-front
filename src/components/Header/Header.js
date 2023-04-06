import { useMediaQuery } from 'react-responsive';
import { HeaderBox, BurgerOpen, MenuThumb } from './Header.styled';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1240px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1239px)' });
  return (
    <HeaderBox>
      <Logo />
      {isDesktop && <Navigation />}
      <MenuThumb>
        <UserMenu />
        {isDesktop && <ThemeToggler />}
        {isTabletOrMobile && <BurgerOpen>Burger</BurgerOpen>}
      </MenuThumb>
    </HeaderBox>
  );
};
