import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { ReactComponent as ErrorIcon } from '../../image/icons/Error-logo.svg';
import { ReactComponent as CheckIcon } from '../../image/icons/Check.svg';
import { ReactComponent as WarnIcon } from '../../image/icons/Warning-logo.svg';

export const FormChange = styled.div`
  position: absolute;
  top: 305px;
  right: 50%;
  width: 335px;
  height: auto;
  padding: 40px 28px;
  background-color: #2a2c36;
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  transform: translateX(50%);
  @media screen and (min-width: 768px) {
    top: 443px;
    width: 500px;
    height: auto;
    padding: 44px 50px;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    right: 180px;
    width: 500px;
    height: auto;
    padding: 44px 50px;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  /* font-weight: 
  font-size: 
  line-height:  */
  letter-spacing: -0.02em;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    /* font-size:  */
  }
`;

export const FormInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    /* gap: 24px; */
    margin-bottom: 50px;
  }
`;

export const ErrorBox = styled.div`
  display: block;
  height: 12px;
  @media (min-width: 768px) {
    height: 24px;
  }
`;

export const FormLabel = styled.label`
  position: relative;
`;

export const IconName = styled(FiUser)`
  position: absolute;
  top: 10px;

  color: #fafafa;
  transform: translate(13px, -50%);
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconEmail = styled(HiOutlineMail)`
  position: absolute;
  top: 10px;
  color: #fafafa;
  transform: translate(13px, -50%);
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconPassword = styled(FiLock)`
  position: absolute;
  top: 10px;
  color: #fafafa;
  transform: translate(13px, -50%);
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const FormInput = styled(Field)`
  width: 100%;
  height: 45px;
  padding-left: 40px;
  color: #fafafa;
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;
  opacity: 0.8;
  ${p => p.color === 'normal' && `border-color: #FAFAFA30`};
  ${p => p.color === 'inValid' && `border-color: #E74A3B`};
  ${p => p.color === 'notSecure' && `border-color: #F6C23E`};
  ${p => p.color === 'valid' && `border-color: #3CBC81`};
  ::placeholder {
    font-family: 'Poppins';
    /* font-size:  */
    /* line-height:*/
    letter-spacing: -0.02em;
    color: #fafafa;
  }
  :focus {
    opacity: 1;
    outline: none;
    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    height: 60px;
    padding-left: 50px;
  }
`;

export const FormLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: -30px;
  /* font-size: */
  /* line-height:  */
  text-decoration-line: underline;
  color: #fafafa;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    /* font-size: */
    /* line-height:  */
  }
  :hover,
  :focus {
    color: rgb(139, 170, 54);
    font-size: 16px;
  }
`;

export const ErrorCont = styled(ErrorMessage)`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  top: 0px;
  right: 14px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 0px;
  }
`;

export const CheckIconStyled = styled(CheckIcon)`
  position: absolute;
  top: 4px;
  right: 14px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 4px;
  }
`;

export const PassWarnIconStyled = styled(WarnIcon)`
  position: absolute;
  top: 4px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  right: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 4px;
  }
`;

export const PassErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  top: 4px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  top: 0px;
  right: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 4px;
  }
`;

export const PassValidIconStyled = styled(CheckIcon)`
  position: absolute;
  top: 4px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  right: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 4px;
  }
`;

export const StatusBox = styled.div`
  font-size: 10px;
  /* margin-top: 8px; */

  color: #e74a3b;
  ${p => p.color === 'notSecure' && `color: #F6C23E`};
  ${p => p.color === 'valid' && `color: #3CBC81`};
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
`;
