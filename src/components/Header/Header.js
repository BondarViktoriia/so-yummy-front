import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IconContext } from 'react-icons';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { HeaderBox, BurgerOpen, MenuThumb } from './Header.styled';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { EditProfile } from '../UserProfile/EditProfile';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1240px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1239px)' });
  return (
    <>
      <HeaderBox>
        <Logo />
        {isDesktop && <Navigation />}
        <MenuThumb>
          <UserMenu />
          {isDesktop && <ThemeToggler />}
          {isTabletOrMobile && (
            <IconContext.Provider value={{ style: { width: 24, height: 24 } }}>
              <BurgerOpen onClick={openModal}>
                <HiOutlineMenuAlt2 />
              </BurgerOpen>
            </IconContext.Provider>
          )}
        </MenuThumb>
      </HeaderBox>
      {isModalOpen && <MobileMenu onClose={closeModal} />}
      <EditProfile />
    </>
  );
};
