import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 14px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: 21px;
  @media screen and (min-width: 768px) {
    height: 67px;
    font-size: 16px;
  }
  color: ${({ look }) => (look === 'cancel' ? '#23262A' : '#fafafa')};
  background-color: ${({ look }) => {
    switch (look) {
      case 'subscribe':
        return '#8baa36';
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return '#22252a';
      case 'rounded_dark':
        return '#8baa36';
      case 'rounded_transparent':
        return 'transparent';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) => {
    switch (look) {
      case 'rounded_transparent':
        return '2px solid #FAFAFA';
      default:
        return 'none';
    }
  }};
  border-radius: ${({ look }) => {
    switch (look) {
      case 'rounded':
        return '24px 44px';
      case 'rounded_dark':
        return '24px 44px';
      case 'rounded_transparent':
        return '24px 44px';
      default:
        return '6px';
    }
  }};
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  :hover,
  :focus {
    background-color: ${({ look }) => {
      switch (look) {
        case 'subscribe':
          return '#8baa36';
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return '#8baa36';
        case 'rounded_dark':
          return '#22252a';
        case 'rounded_transparent':
          return 'transparent';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look }) => {
      switch (look) {
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'rounded_transparent':
          return '#8baa36';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};
    border: ${({ look }) => {
      switch (look) {
        case 'cancel':
          return '1px solid #23262a';
        case 'rounded_transparent':
          return '2px solid #8baa36';
        default:
          return 'none';
      }
    }};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 14px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: 21px;
  text-decoration: none;
  color: ${({ look }) => (look === 'cancel' ? '#23262A' : '#fafafa')};
  background-color: ${({ look }) => {
    switch (look) {
      case 'subscribe':
        return '#8baa36';
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return '#22252a';
      case 'rounded_dark':
        return '#8baa36';
      case 'rounded_transparent':
        return 'transparent';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) => {
    switch (look) {
      case 'rounded_transparent':
        return '2px solid #FAFAFA';
      default:
        return 'none';
    }
  }};
  border-radius: ${({ look }) => {
    switch (look) {
      case 'rounded':
        return '24px 44px';
      case 'rounded_dark':
        return '24px 44px';
      case 'rounded_transparent':
        return '24px 44px';
      default:
        return '6px';
    }
  }};
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;
  @media screen and (min-width: 768px) {
    width: ${({ widthTablet }) => widthTablet && widthTablet};
    height: ${({ heigthTablet }) => heigthTablet && heigthTablet};
    font-size: ${({ fontSizeTablet }) =>
      fontSizeTablet ? fontSizeTablet : '16px'};
  }
  @media screen and (min-width: 1440px) {
    width: ${({ widthDesktop }) => widthDesktop && widthDesktop};
    height: ${({ heigthDesktop }) => heigthDesktop && heigthDesktop};
    font-size: ${({ fontSizeDesktop }) =>
      fontSizeDesktop ? fontSizeDesktop : '16px'};
  }
  :hover,
  :focus {
    background-color: ${({ look }) => {
      switch (look) {
        case 'subscribe':
          return '#8baa36';
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return '#8baa36';
        case 'rounded_dark':
          return '#22252a';
        case 'rounded_transparent':
          return 'transparent';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look }) => {
      switch (look) {
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'rounded_transparent':
          return '#8baa36';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};
    border: ${({ look }) => {
      switch (look) {
        case 'cancel':
          return '1px solid #23262a';
        case 'rounded_transparent':
          return '2px solid #8baa36';
        default:
          return 'none';
      }
    }};
  }
`;
