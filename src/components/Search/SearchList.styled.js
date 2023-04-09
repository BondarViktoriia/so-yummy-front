import styled from 'styled-components';

export const List = styled.ul`
  width: 375px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  margin-bottom:50px;
  @media screen and (min-width: 768px) {
    width: 768px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    gap: 100px 14px;
  }
`;