import styled from 'styled-components';
import bgImg from '../../image/shared-layout/mob-menu-tablet@2x.png';

export const MobileMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.mobMenuBgc};
  padding: 18px 16px;
  height: 100%;
`;
export const MobNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 124px;
`;
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  z-index: 9999;
`;
export const NavCont = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  z-index: 9999;
`;
export const NavThumb = styled.div`
  text-align: center;
`;
export const TogglerThumb = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  width: 375px;
  height: 100vh;
  @media (min-width: 768px) {
    width: 768px;
  }
`;

export const BackImage = styled.div`
  background-image: url('${bgImg}');
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 100%;
  @media (min-width: 768px) {
    width: 582px;
  }
`;
