import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../redux/auth/authOperations';

import {
  CloseBtn,
  AddAvatarBtn,
  AddIcon,
  AvatarCont,
  AvatarThumb,
  AvatarImg,
  AvatarPlug,
  EditProfileCont,
  CloseBtnCont,
  CloseIcon,
  SubmitBtn,
  FormCont,
  BtnText,
  Input,
  InputCont,
  UserIcon,
  EdinIcon,
  Form,
  AvatarInput,
} from './EditProfile.styled';

export const EditProfile = ({ closeEdit, id, name, avatar }) => {
  const [image, setImage] = useState(avatar);
  const [username, setUsername] = useState(name);
  const dispatch = useDispatch();
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

  const changeAvatar = e => {
    if (e.target.files[0]) {
      const path = window.URL.createObjectURL(e.target.files[0]);
      setImage(path);
      console.log(path);
      console.log(e.target.files[0]);
    }
  };
  const changeName = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements[0].files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    if (file) {
      formData.append('avatar', file);
    }
    if (username) {
      formData.append('name', username);
    }
    dispatch(updateUser(formData));
  };

  return (
    <EditProfileCont>
      <CloseBtnCont>
        <CloseBtn onClick={closeEdit}>
          <CloseIcon />
        </CloseBtn>
      </CloseBtnCont>
      <Form onSubmit={handleSubmit}>
        <AvatarCont>
          <AvatarThumb>
            {image ? (
              <AvatarImg style={{ backgroundImage: `${avatar}` }} />
            ) : (
              <AvatarPlug />
            )}
            <AddAvatarBtn htmlFor="file-input">
              <AddIcon />
              <AvatarInput
                id="file-input"
                type="file"
                accept="image/*"
                onChange={changeAvatar}
              />
            </AddAvatarBtn>
          </AvatarThumb>
        </AvatarCont>
        <FormCont>
          <InputCont>
            <UserIcon />
            <Input value={username} onChange={changeName} />
            <EdinIcon />
          </InputCont>
          <SubmitBtn type="submit">
            <BtnText>Save changes</BtnText>
          </SubmitBtn>
        </FormCont>
      </Form>
    </EditProfileCont>
  );
};
