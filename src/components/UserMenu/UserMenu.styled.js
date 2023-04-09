import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
`;

export const AvatarCont = styled.div`
  margin-right: 14px;
`;
export const Avatar = styled.span`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid aqua;
`;
export const UserNameCont = styled.div``;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  color: ${props => props.theme.colors.darkText};
`;
