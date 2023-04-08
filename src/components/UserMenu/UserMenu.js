import { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import {
  Avatar,
  AvatarCont,
  UserName,
  UserNameCont,
  UserMenuBox,
} from './UserMenu.styled';

export const UserMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);
  return (
    <>
      <UserMenuBox onClick={openProfile}>
        <AvatarCont>
          <Avatar />
        </AvatarCont>
        <UserNameCont>
          <UserName>UserName</UserName>
        </UserNameCont>
      </UserMenuBox>
      {isProfileOpen && <UserProfile onClose={closeProfile} />}
    </>
  );
};
