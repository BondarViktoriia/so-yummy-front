import styled from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Box = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1240px) {
    width: 1240px;
  }
`;
