import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconContext } from 'react-icons';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';
import {
  Backdrop,
  ModalBox,
  Cont,
  EditText,
  EditBtn,
  EditCont,
  LogoutBtn,
  LogoutText,
  LogoutTextThumb,
} from './UserProfile.styled';
import { EditProfile } from './EditProfile';

const modalRoot = document.querySelector('#modal-root');

const UserProfile = ({ onClose }) => {
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
            <IconContext.Provider value={{ style: { width: 14, height: 14 } }}>
              <EditBtn onClick={openEdit}>
                <FiEdit2 />
              </EditBtn>
            </IconContext.Provider>
          </EditCont>
          <LogoutBtn>
            <LogoutTextThumb>
              <LogoutText>Log out</LogoutText>
              <IconContext.Provider
                value={{ style: { width: 14, height: 14, color: '#fafafa' } }}
              >
                <span>
                  <FiArrowRight />
                </span>
              </IconContext.Provider>
            </LogoutTextThumb>
          </LogoutBtn>
        </Cont>
      </ModalBox>

      {isEditOpen && <EditProfile closeEdit={closeEdit} />}
    </Backdrop>,
    modalRoot
  );
};

export default UserProfile;
