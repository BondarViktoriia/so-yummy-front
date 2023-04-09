import styled from 'styled-components';

export const Form = styled.form`

`;

export const Input = styled.input`
  padding-left: 32px;
  padding-right: 120px;
  margin-bottom:50px;
  width: 295px;
  height: 53px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  
`;

export const Button = styled.button`
  width: 113px;
  height: 53px;
  background-color: #8BAA36;
  color: #FAFAFA;
  border-radius: 24px 44px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
 `;

export const InputWrapperBlock = styled.div`
display: flex;
justify-content: center;
margin-bottom: 24px;
`
