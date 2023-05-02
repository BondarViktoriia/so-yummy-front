import { useState } from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../UserProfile/UserProfile';
import { selectUser } from '../../redux/auth/authSelectors';
import {
  AvatarCont,
  Avatar,
  UserName,
  UserNameCont,
  UserMenuBox,
} from './UserMenu.styled';
import { useLocation } from 'react-router-dom';

export const UserMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);
  const { _id, name, avatar } = useSelector(selectUser);
  const location = useLocation();

  const isRecipePage = location.pathname.includes('/recipe/');

  return (
    <>
      <UserMenuBox onClick={openProfile}>
        <AvatarCont>
          <Avatar style={{ backgroundImage: `url(${avatar})` }} />
        </AvatarCont>
        <UserNameCont>
          <UserName color={isRecipePage ? '#23262A' : undefined}>{name || 'UserName'}</UserName>
        </UserNameCont>
      </UserMenuBox>
      {isProfileOpen && (
        <UserProfile
          onClose={closeProfile}
          id={_id}
          name={name}
          avatar={avatar}
        />
      )}
    </>
  );
};
