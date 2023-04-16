import styled from 'styled-components';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: absolute;
  top: 72px;
  right: 15%;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.accentGreen};
  border-radius: 16px;
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${props => props.theme.colors.background};
  @media (min-width: 768px) {
    border-color: transparent;
  }
`;

export const EditText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.darkText};
`;

export const EditBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit2)`
  width: 14px;
  height: 14px;
  color: ${props => props.theme.colors.darkText};
`;

export const EditCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoutBtn = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.accentGreen};
  color: ${props => props.theme.colors.footerText};
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.darkText};
    color: ${props => props.theme.colors.background};
  }
`;

export const LogoutText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export const LogoutTextThumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutIcon = styled(FiArrowRight)`
  width: 14px;
  height: 14px;
`;
