import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 90px;
  }
`;

export const Input = styled.input`
  padding-left: 32px;
  padding-right: 120px;
  margin-bottom: 50px;
  width: 295px;
  height: 53px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  border-color: ${props => props.theme.colors.inputSearchBorder};
  background-color: ${props => props.theme.colors.inputSearchBackground};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  color: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
    padding-left: 38px;
    padding-right: 170px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 113px;
  height: 53px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const InputWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
  }
`;
