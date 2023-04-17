import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { updateUser } from '../../redux/auth/authOperations';

import {
  CloseBtn,
  AddAvatarBtn,
  AddIcon,
  AvatarCont,
  AvatarThumb,
  AvatarImg,
  AvatarImgPath,
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
  const user = useSelector(selectUser);
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setUsername(user.name);
  }, [user]);

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

    setFile(file);

    if (!file || !file.type.includes('image')) {
      setPath('');
      return;
    }
    setPath(URL.createObjectURL(file));
  };

  const changeName = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('avatar', file);

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
            {!file ? (
              <AvatarImg src={avatar} alt="avatar" />
            ) : (
              <AvatarImgPath src={path} alt="new avatar" />
            )}
            <AddAvatarBtn>
              <AddIcon />
              <AvatarInput
                name="avatar"
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
            <Input
              placeholder="Enter your name"
              name="name"
              required
              onChange={changeName}
              value={username}
            />
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
