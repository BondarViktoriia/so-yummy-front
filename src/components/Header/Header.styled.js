import styled from 'styled-components';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

export const HeaderBox = styled.div`
  display: flex;
  margin-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  right: 0;
  left: 0;
  max-width: 375px;
  @media (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const MenuThumb = styled.div`
  display: flex;
  align-items: center;
`;
export const BurgerOpen = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const BurgerIcon = styled(HiOutlineMenuAlt2)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.darkText};
`;
