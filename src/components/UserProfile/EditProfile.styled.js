import styled from 'styled-components';
import { FiUser, FiPlus, FiEdit2 } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

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

export const CloseIcon = styled(IoCloseOutline)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.darkText};
`;
export const AvatarCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
`;
export const AvatarImg = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.userLogo};
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;
export const AvatarImgPath = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.userLogo};
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;
export const AvatarPlug = styled(FiUser)`
  width: 40px;
  height: 40px;
  color: #c4c4c4;
  @media (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
`;

export const AddAvatarBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background-color: ${props => props.theme.colors.accentGreen};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  z-index: 145;
  @media (min-width: 768px) {
    bottom: -2px;
    right: 10px;
  }
`;

export const AddIcon = styled(FiPlus)`
  width: 24px;
  height: 24px;
  color: #fafafa;
`;
export const AvatarInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const AvatarThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const InputCont = styled.label`
  display: block;
  position: relative;
  margin-bottom: 24px;
`;

export const FormCont = styled.div`
  display: block;
`;
export const Input = styled.input`
  padding: 8px 8px 8px 36px;
  border: 1px solid ${props => props.theme.colors.placeholder};
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 21px;
  background-color: transparent;
  color: ${props => props.theme.colors.darkText};
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.placeholder};
    size: 18px;
  }
  ::placeholder {
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
  color: ${props => props.theme.colors.darkText};
`;

export const EdinIcon = styled(FiEdit2)`
  position: absolute;
  top: 18px;
  right: 14px;
  width: 17px;
  height: 17px;
  color: ${props => props.theme.colors.darkText};
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
