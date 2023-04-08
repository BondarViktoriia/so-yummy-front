import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { IoCloseOutline, IoAddOutline } from 'react-icons/io5';
import {
  CloseBtn,
  AddAvatarBtn,
  AvatarCont,
  AvatarThumb,
  AvatarImg,
  EditProfileCont,
  CloseBtnCont,
  SubmitBtn,
  FormCont,
  BtnText,
  Input,
  InputCont,
  UserIcon,
  //   Form,
} from './EditProfile.styled';

export const EditProfile = ({ closeEdit }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  const handleEsc = e => {
    if (e.code === 'Escape') {
      closeEdit();
    }
  };

  return (
    <EditProfileCont>
      <CloseBtnCont>
        <IconContext.Provider value={{ style: { width: 24, height: 24 } }}>
          <CloseBtn onClick={closeEdit}>
            <IoCloseOutline />
          </CloseBtn>
        </IconContext.Provider>
      </CloseBtnCont>
      <AvatarCont>
        <AvatarThumb>
          <AvatarImg></AvatarImg>
          <IconContext.Provider
            value={{ style: { width: 18, height: 18, color: '#FAFAFA' } }}
          >
            <AddAvatarBtn>
              <IoAddOutline />
            </AddAvatarBtn>
          </IconContext.Provider>
        </AvatarThumb>
      </AvatarCont>
      <FormCont>
        <form>
          <InputCont>
            <UserIcon />

            <Input />
          </InputCont>
          <SubmitBtn type="submit">
            <BtnText>Save changes</BtnText>
          </SubmitBtn>
        </form>
      </FormCont>
    </EditProfileCont>
  );
};
