import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const AvatarIcon = styled(FiUser)`
  width: 24px;
  height: 24px;
  color: #c4c4c4;
`;

export const AvatarCont = styled.div`
  display: flex;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const UserNameCont = styled.div``;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  color: ${props => (props.color ? props.color : props.theme.colors.darkText)};
`;
