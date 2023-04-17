import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionMain = styled.section`
  padding: 64px 0 100px 0;
  background: ${props => props.theme.colors.background};

  @media (min-width: 768px) {
    padding: 64px 0 100px 0;
  }
  @media (min-width: 1440px) {
    padding: 111px 0 125px 0;
  }
`;

export const MainTitle = styled.h2`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-size: 28px;
  line-height: 28px;
  color: ${props => props.theme.colors.title};

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const MainCategories = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;

  li {
    list-style-type: none;
    @media (min-width: 768px) {
    }
    @media (min-width: 1440px) {
    }
  }
`;

export const MainList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 20px;
  margin: 32px 0 24px 0;
  li {
    list-style-type: none;
  }
  @media (min-width: 768px) {
    gap: 60px;
  }
  @media (min-width: 1440px) {
    margin: 50px 0 50px 0;
    flex-basis: calc(100 / 4 - 30px);
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 94px;
  height: 38px;
  background-color: ${props => props.theme.colors.btnGreen};

  border: none;
  color: #fafafa;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 6px;
  margin-left: auto;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.footer};
  }
`;
export const MainButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 195px;
  height: 46px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid #8aa936;
  color: ${props => props.theme.colors.footer};

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin: auto;
  text-decoration: none;
  margin-top: 40px;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.accentGreen};

    &.active {
      color: ${props => props.theme.colors.accentGreen};
    }
  }
`;

export const Wrap = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
