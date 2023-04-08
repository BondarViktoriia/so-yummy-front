import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';

export const FormWrapper = styled.div`
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

export const FormTitle = styled.h1`
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
  gap: 12px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;

export const FormLabel = styled.label`
  position: relative;
`;

export const IconName = styled(FiUser)`
  position: absolute;
  top: 50%;
  color: #fafafa;
  transform: translate(13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconEmail = styled(HiOutlineMail)`
  position: absolute;
  top: 50%;
  color: #fafafa;
  transform: translate(13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconPassword = styled(FiLock)`
  position: absolute;
  top: 50%;
  color: #fafafa;
  transform: translate(13px, -50%);
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
`;
