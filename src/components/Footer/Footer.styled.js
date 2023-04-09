import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterSection = styled.section`
  background-color: ${props => props.theme.colors.footer};
`;

export const FooterThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 18px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
    padding-left: 32px;
  }

  @media (min-width: 1440px) {
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 100px;
  }
`;

export const LogoCont = styled.div`
  display: flex;
  align-items: center;
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

export const Link = styled(NavLink)``;

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const InfoItem = styled.li`
  /* &:not(:last-child) {
    margin-right: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-top: 28px;
    }
  }
  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-top: 40px;
    }
  } */
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
