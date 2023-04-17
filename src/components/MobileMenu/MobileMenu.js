import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  MobileMenuContainer,
  CloseIcon,
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
          <MobNav>
            <Logo />
            <CloseBtn onClick={onClose}>
              <CloseIcon />
            </CloseBtn>
          </MobNav>
          <NavCont onClick={onClose}>
            <NavThumb>
              <Navigation />
            </NavThumb>
          </NavCont>
          <TogglerThumb>
            <ThemeToggler />
          </TogglerThumb>
          <BackImage />
        </MobileMenuContainer>
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};
