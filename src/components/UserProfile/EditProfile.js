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
  //   Form,
} from './EditProfile.styled';

export const EditProfile = () => {
  return (
    <EditProfileCont>
      <CloseBtnCont>
        <IconContext.Provider value={{ style: { width: 24, height: 24 } }}>
          <CloseBtn>
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
            <div></div>
            <Input />
            <div></div>
          </InputCont>
          <SubmitBtn type="submit">
            <BtnText>Save changes</BtnText>
          </SubmitBtn>
        </form>
      </FormCont>
    </EditProfileCont>
  );
};
