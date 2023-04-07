import {
  Avatar,
  AvatarCont,
  UserName,
  UserNameCont,
  UserMenuBox,
} from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuBox>
      <AvatarCont>
        <Avatar />
      </AvatarCont>
      <UserNameCont>
        <UserName>UserName</UserName>
      </UserNameCont>
    </UserMenuBox>
  );
};
