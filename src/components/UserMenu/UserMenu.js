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

export const UserMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);
  const { _id, name, avatar } = useSelector(selectUser);
  return (
    <>
      <UserMenuBox onClick={openProfile}>
        <AvatarCont>
          <Avatar style={{ backgroundImage: `url(${avatar})` }} />
        </AvatarCont>
        <UserNameCont>
          <UserName>{name || 'UserName'}</UserName>
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
