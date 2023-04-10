import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const EditProfileCont = styled.div`
  position: relative;
  width: 330px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 32px 24px;
  @media (min-width: 768px) {
    width: 480px;
  }
  @media (min-width: 1440px) {
    width: 500px;
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

export const AddAvatarBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background-color: ${props => props.theme.colors.accentGreen};
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const AvatarCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
`;

export const AvatarThumb = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.userLogo};
`;

export const AvatarImg = styled.div``;

// export const Form = styled.form``;

export const FormCont = styled.div`
  display: block;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: ${props => props.theme.colors.accentGreen};
  border-radius: 6px;
  border-color: transparent;
`;

export const BtnText = styled.span`
  color: ${props => props.theme.colors.footerText};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const InputCont = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  padding: 8px 8px 8px 36px;
  border: 1px solid ${props => props.theme.colors.placeholder};
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 21px;
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.placeholder};
    size: 18px;
  }
  ::placeholder {
    width: 52px;
    height: 27px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.darkText};
    opacity: 0.8;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 15px;
  left: 14px;
  width: 18px;
  height: 18px;
`;
