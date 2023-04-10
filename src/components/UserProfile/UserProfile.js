import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalBox,
  Cont,
  EditText,
  EditBtn,
  EditCont,
  EditIcon,
  LogoutBtn,
  LogoutText,
  LogoutTextThumb,
  LogoutIcon,
} from './UserProfile.styled';
import { EditProfile } from './EditProfile';
import { logoutUser } from '../../redux/auth/authOperations';

const modalRoot = document.querySelector('#modal-root');

const UserProfile = ({ onClose, id, avatar }) => {
  const dispatch = useDispatch();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const openEdit = () => setIsEditOpen(true);
  const closeEdit = () => setIsEditOpen(false);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  const handleEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalBox>
        <Cont>
          <EditCont>
            <EditText>Edit profile</EditText>
            <EditBtn onClick={openEdit}>
              <EditIcon />
            </EditBtn>
          </EditCont>
          <LogoutBtn
            onClick={() => {
              dispatch(logoutUser());
              onClose();
            }}
          >
            <LogoutTextThumb>
              <LogoutText>Log out</LogoutText>
              <LogoutIcon />
            </LogoutTextThumb>
          </LogoutBtn>
        </Cont>
      </ModalBox>

      {isEditOpen && (
        <EditProfile closeEdit={closeEdit} id={id} avatar={avatar} />
      )}
    </Backdrop>,
    modalRoot
  );
};

export default UserProfile;
