import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../Container/Container';
import { HeaderBox, BurgerOpen, MenuThumb, BurgerIcon } from './Header.styled';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
  return (
    <Container>
      <HeaderBox>
        <Logo />
        {isDesktop && <Navigation />}
        <MenuThumb>
          <UserMenu />
          {isDesktop && <ThemeToggler />}
          {isTabletOrMobile && (
            <BurgerOpen onClick={openModal}>
              <BurgerIcon />
            </BurgerOpen>
          )}
        </MenuThumb>
      </HeaderBox>
      {isModalOpen && <MobileMenu onClose={closeModal} />}
    </Container>
  );
};
