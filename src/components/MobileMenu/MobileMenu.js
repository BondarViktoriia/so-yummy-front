import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import {
  MobileMenuContainer,
  MobNav,
  CloseBtn,
  NavCont,
  NavThumb,
  TogglerThumb,
  Backdrop,
  ModalBox,
  BackImage,
} from './MobileMenu.styled';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  const handleEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalBox>
        <MobileMenuContainer>
          <BackImage />
          <MobNav>
            <Logo />
            <IconContext.Provider value={{ style: { width: 32, height: 32 } }}>
              <CloseBtn onClick={onClose}>
                <IoCloseOutline />
              </CloseBtn>
            </IconContext.Provider>
          </MobNav>
          <NavCont>
            <NavThumb>
              <Navigation />
            </NavThumb>
          </NavCont>
          <TogglerThumb>
            <ThemeToggler />
          </TogglerThumb>
        </MobileMenuContainer>
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};
