import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

import BgMob from '../../image/footer/bgc-mob.png';
import BgTab from '../../image/footer/bgc-tab.png';
import BgDesk from '../../image/footer/bgc-desk.png';
import BgUpMob from '../../image/footer/bgc-up-mob.png';
import BgUpTab from '../../image/footer/bgc-up-tab.png';
import BgUpDesk from '../../image/footer/bgc-up-desk.png';

export const FooterSection = styled.section`
  background-color: ${props => props.theme.colors.footer};
  z-index: 9999;
`;

export const FooterThumb = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 18px;
  z-index: 9999;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const DeskWrap = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 72px;
  }
`;

export const DescrCont = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    width: 418px;
    margin-right: 159px;
  }
`;

export const LogoCont = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
`;
export const LogoText = styled.span`
  margin-left: 9px;
  color: ${props => props.theme.colors.footerText};
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  @media (min-width: 768px) {
    margin-left: 12px;
    font-size: 28px;
    line-height: 28px;
  }
`;

export const DescrList = styled.ul`
  list-style: inside;
`;

export const DescrItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.footerText};
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const FooterNav = styled.nav`
  text-align: center;
  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1440px) {
    margin-right: 225px;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.footerText};
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 339px;
  }
`;

export const SubscrTitle = styled.p`
  margin-bottom: 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.footerText};
`;

export const SubscrText = styled.p`
  margin-bottom: 28px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.footerText};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const InputCont = styled.div`
  position: relative;
  margin-bottom: 8px;
  margin-right: 0;
  @media (min-width: 768px) {
    margin-right: 12px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 16px;
    margin-right: 0;
  }
`;

export const LetterIcon = styled(FiMail)`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    top: 15px;
    left: 15px;
  }
  @media (min-width: 1440px) {
    top: 17px;
    left: 16px;
    width: 25px;
    height: 25px;
  }
`;

export const Input = styled.input`
  width: 204px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 42px;
  border: 1px solid ${props => props.theme.colors.placeholder};
  border-radius: 8px;
  height: 38px;
  font-size: 10px;
  line-height: 15px;
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.placeholder};
    size: 18px;
  }
  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.darkText};
    opacity: 0.8;
    flex: none;
    order: 1;
    flex-grow: 0;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
  @media (min-width: 768px) {
    width: 259px;
    height: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 339px;
    height: 60px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 52px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const SubmitBtn = styled.button`
  width: 204px;
  height: 38px;
  background-color: ${props => props.theme.colors.accentGreen};
  border-radius: 6px;
  border-color: transparent;
  @media (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 339px;
    height: 60px;
  }
`;

export const BtnText = styled.span`
  color: ${props => props.theme.colors.footerText};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const FollowUsCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
  @media (min-width: 768px) {
    margin-top: 38px;
  }
  @media (min-width: 1440px) {
    margin-top: 41px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 28px;
    }
  }
  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const ArrText = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.infoText};
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
export const TermsText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.infoText};
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const BgImg = styled.div`
  background-image: url('${BgMob}');
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 185px;
  height: 100%;
  @media (min-width: 768px) {
    background-image: url('${BgTab}');
    width: 350px;
  }
  @media (min-width: 1440px) {
    background-image: url('${BgDesk}');
    width: 500px;
  }
`;

export const BgUpImg = styled.div`
  background-image: url('${BgUpMob}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
  position: absolute;
  left: 0;
  top: -250px;
  width: 256px;
  height: 100%;
  @media (min-width: 768px) {
    background-image: url('${BgUpTab}');
    width: 350px;
    top: -150px;
  }
  @media (min-width: 1440px) {
    background-image: url('${BgUpDesk}');
    width: 500px;
    top: -50px;
  }
`;
