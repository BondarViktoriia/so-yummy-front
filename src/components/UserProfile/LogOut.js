import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import {
  CloseBtnCont,
  CloseBtn,
  CloseIcon,
  LogoutModalCont,
  Wrapper,
  Text,
  BtnThumb,
  LogoutBtn,
  CancelBtn,
} from './LogOut.styled';

export const LogOut = ({ closeLogout }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  const handleEsc = e => {
    if (e.code === 'Escape') {
      closeLogout();
    }
  };

  return (
    <LogoutModalCont>
      <CloseBtnCont>
        <CloseBtn onClick={closeLogout}>
          <CloseIcon />
        </CloseBtn>
      </CloseBtnCont>
      <Wrapper>
        <Text>Are you sure you want to log out?</Text>
        <BtnThumb>
          <LogoutBtn
            type="button"
            onClick={() => {
              dispatch(logoutUser());
              closeLogout();
            }}
          >
            Logout
          </LogoutBtn>
          <CancelBtn type="button" onClick={closeLogout}>
            Cancel
          </CancelBtn>
        </BtnThumb>
      </Wrapper>
    </LogoutModalCont>
  );
};

export default LogOut;
