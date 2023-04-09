import styled from 'styled-components';
// import { IoCloseOutline } from 'react-icons/io5';

export const Wrap = styled.div`
  padding-top: 50px;
`;
export const Title = styled.h2`
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 50px;
  margin-top: 72px;
  margin-left: 16px;
  font-weight: 600;
  font-size: 44px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 72px;
    margin-left: 32px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-left: 100px;
  }
`;
export const Form = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ImageBox = styled.div`
  width: 279px;
  height: 268px;
  margin: 0 auto;
  background-color: grey;
  border-radius: 8px;
  display: flex;

  align-items: center;

  justify-content: center;
  cursor: pointer;

  overflow: hidden;
  background-image: unset;
  background-size: cover;
  @media only screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const ImageInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const Description = styled.div`
  @media screen and(max-width:767px) {
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
  }
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
`;

export const InputWrap = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
  }
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-top: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-left: 32px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-left: 50px;
  }
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
  width: 100%;
`;

export const WrapIngredients = styled.div`
  margin-bottom: 24px;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-right: 32px;
  }
  @media only screen and (max-width: 1439px) {
    margin-left: 32px;
    justify-content: space-between;
  }
`;

export const TitleIngredients = styled.h2`
  margin-left: 16px;
  @media only screen and (min-width: 768px) {
    margin-left: 32px;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 65px;
    margin-right: 362px;
  }
`;

export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 14px;
`;

export const InputIngredients = styled.input`
  margin-right: 14px;
  width: 194px;
  height: 53px;
  margin-left: 16px;
  margin-right: 16px;
  border: none;
  border-radius: 6px;
  background-color: #d9d9d9;
  @media only screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
    margin-left: 32px;
  } ;
`;

export const SelectIngredients = styled.select`
  width: 84px;
  height: 53px;
  border: none;
  background-color: #d9d9d9;
  margin-right: 33px;
  @media only screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    margin-right: 157px;
  }
  @media only screen and (min-width: 1440px) {
    width: 99px;
    height: 59px;
    margin-right: 60px;
  }
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 510px;
    margin-left: 33px;
    margin-top: 100px;
  }
`;

export const TitlePreparation = styled.h2`
  margin: 0;
  text-align: start;
  margin-bottom: 24px;
`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    width: 505px;
    height: 224px;
  }
`;

export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #22252a;
  color: #fafafa;

  right: 25px;
  width: 113px;
  height: 52px;
  border-radius: 24px 44px;
  border: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  margin-top: 32px;
  margin-left: 30px;
  &:hover,
  &:focus {
  }
`;


////////////////////////////////////////////




export const MainWrapper = styled.div`
  /* display: ${({ isDesktop }) => (isDesktop ? 'flex' : 'unset')}; */
  gap: 100px;
  padding-bottom: 200px;
`;

export const RecipeForm = styled.form`
  width: 100%;
  p,
  input,
  /* textarea {
    font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
    line-height: ${({ isMobile }) => (isMobile ? '1.3' : '1.5')};
  } */

  input,
  textarea {
    &::placeholder {
      opacity: 1;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  button {
    cursor: pointer;
  }

  .css-l4u8b9-MuiInputBase-root-MuiInput-root::after {
    /* border-bottom: ${({ theme }) => `2px solid ${theme.colors.mainAccent}`}; */
  }
`;

export const IngredientsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddRecepiSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 72px;

  @media (min-width: 768px) {
    flex-direction: unset;
    gap: 32px;
  }

  input {
    padding: 15px 0;
  }

  label[id='labelFile'] {
    /* width: ${({ isDesktop }) => (isDesktop ? '360px' : '280px')};
    height: ${({ isDesktop }) => (isDesktop ? '345px' : '270px')}; */
    background-color: #8baa36;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    overflow: hidden;
    /* background-image: url(${({ path }) => path}); */
    background-size: cover;
  }

  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }
`;

export const SelectComp = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid gray;
  color: rgba(0, 0, 0, 0.5);
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputsWithSelectWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const IngredientsSection = styled.div`
  margin-top: 72px;
`;

export const RecepieSection = styled.div`
  margin-top: 72px;

  textarea {
    padding: 10px 16px;
    resize: none;
    background: #d9d9d9;
    border-radius: 6px;
    width: 100%;
    outline: none;
    border: none;
    margin-top: 24px;
    height: 155px;
    font-family: inherit;
  }

  button {
    margin-top: 32px;
  }
`;

export const PopularSection = styled.div`
  margin-top: 72px;
  /* width: ${({ isDesktop }) => (isDesktop ? '320px' : '100%')}; */
  padding-bottom: 100px;
`;

export const PopularRecipe = styled.div`
  width: 100%;
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ValueInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: rgb(217, 217, 217);
  border-radius: 6px;
  /* margin-left: ${({ isMobile }) => (isMobile ? '14px' : '32px')}; */
`;

export const InputUnitValue = styled.input`
  border-style: unset;
  background-color: transparent;
  display: block;
  height: 50px;
  padding: 0 8px;
  outline: none;
  width: 50px;
`;

export const PupularList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const PopularItem = styled.li`
  a {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #707070;
    color: inherit;
  }
`;

export const RecipeTitle = styled.p`
  /* font-weight: ${({ theme }) => theme.fontWeights[1]}; */
  font-size: 16px;
  /* line-height: ${({ theme }) => theme.lineHeights.description};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader}; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

export const RecipeText = styled.p`
  margin-top: 3px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  /* color: ${({ theme }) => theme.colors.mainGrey};
  font-weight: ${({ theme }) => theme.fontWeights[0]}; */
  font-size: 12px;
  /* line-height: ${({ theme }) => theme.lineHeights.content};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader}; */
`;

export const RecepiImg = styled.img`
  border-radius: 8px;
  height: 85px;
  width: 100px;
  margin-right: 12px;
`;

export const ButtonRemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;