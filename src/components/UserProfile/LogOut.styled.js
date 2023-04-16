import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

export const LogoutModalCont = styled.div`
  position: relative;
  width: 330px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 44px 24px;
  @media (min-width: 768px) {
    width: 480px;
    padding: 50px 40px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    padding: 50px;
  }
`;

export const CloseBtnCont = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const CloseIcon = styled(IoCloseOutline)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.darkText};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.darkText};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const BtnThumb = styled.div`
  display: flex;
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;
export const LogoutBtn = styled.button`
  width: 137px;
  padding-top: 21px;
  padding-bottom: 21px;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.btnGreen};
  color: ${props => props.theme.colors.footerText};
  border-color: transparent;
  border-radius: 6px;
  @media (min-width: 768px) {
    margin-right: 16px;
    width: 192px;
  }
`;
export const CancelBtn = styled.button`
  width: 137px;
  padding-top: 21px;
  padding-bottom: 21px;
  background-color: ${props => props.theme.colors.userLogo};
  color: #23262a;
  border-color: transparent;
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 192px;
  }
`;
