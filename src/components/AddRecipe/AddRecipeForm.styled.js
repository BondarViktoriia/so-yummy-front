import styled from 'styled-components';
// import { IoCloseOutline } from 'react-icons/io5';

export const Wrap = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
`;
export const ImageBox = styled.div`
  width: 279px;
  height: 268px;
  /* background-color: ${props => props.theme.colors.accentGreen}; */
  background-color:grey;
border-radius: 8px;
    display: flex;

    align-items: center;
  
    justify-content: center;
    cursor: pointer;

    overflow: hidden;
    background-image: unset;
    background-size: cover;
@media only screen and (min-width: 1440px){
   width: 357px;
  height: 344px;
}
`;

export const ImageInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const Title = styled.h2`
  margin-bottom: 72px;

  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Description = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
`;


export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-top: 24px;
  margin-left: 50px;
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
  width: 343px;
  height: 43px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
`;

export const SelectDescription = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;

export const MainWrapIngredients = styled.div`
  margin-top: 44px;
  margin-bottom: 18px;
  width: 100%;
`;

export const WrapIngredients = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

export const TitleIngredients = styled.h2``;

export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputIngredients = styled.input`
  margin-right: 14px;
  max-width: 194px;
  height: 53px;
  padding-left: 16px;
  border: none;
  border-radius: 6px;
`;

export const SelectIngredients = styled.select`
  height: 53px;
  border: none;
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;
`;

export const TitlePreparation = styled.h2`
  margin-bottom: 24px;
`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
`;

export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* position: absolute; */
  /* top: 0; */
  right: 25px;
  width: 113px;
  height: 52px;
  border-radius: 24px 44px;
  border: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  &:hover,
  &:focus {
  }
`;
