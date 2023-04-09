import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  margin-top: 18px;
  margin-left: 16px;
  margin-right: 16px;
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
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
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
`;
