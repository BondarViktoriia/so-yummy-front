import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';

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
  AvatarInput,
} from './EditProfile.styled';

export const EditProfile = ({ closeEdit, id, name, avatar }) => {
  const currentUser = useSelector(selectUser);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [path, setPath] = useState('');
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
    const { files } = e.currentTarget;
    const [file] = files;

    if (!file || !file.type.includes('image')) {
      setImage(null);
      setPath('');
      return;
    }
    setImage(file);
    setPath(URL.createObjectURL(file));
  };

  const changeName = e => {
    console.log('1', e.target.value);
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(currentUser.email);
    const formData = new FormData();
    formData.append('avatar', image);
    formData.append('name', username);
    dispatch(updateUser(formData));
    closeEdit();
  };

  return (
    <EditProfileCont>
      <CloseBtnCont>
        <CloseBtn onClick={closeEdit}>
          <CloseIcon />
        </CloseBtn>
      </CloseBtnCont>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <AvatarCont>
          <AvatarThumb>
            {image ? (
              <AvatarImg style={{ backgroundImage: `${path}` }} />
            ) : (
              <AvatarPlug />
            )}
            <AddAvatarBtn>
              <AddIcon />
              <AvatarInput
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
            <Input onChange={changeName} />
            <EdinIcon />
          </InputCont>
          <SubmitBtn type="submit">
            <BtnText>Save changes</BtnText>
          </SubmitBtn>
        </FormCont>
      </form>
    </EditProfileCont>
  );
};
