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
