import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const RecipesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
  margin-top: 32px;
  gap: 28px;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (min-width: 768px) {
    justify-content: center;
    margin-bottom: 200px;
    margin-top: 50px;
    gap: 32px;
    animation: ${fadeIn} 1.5s ease-in-out;
  }

  @media (min-width: 1440px) {
    /* justify-content: center; */
    padding-left: 99px;
    padding-right: 99px;
    gap: 14px;
    row-gap: 100px;
    animation: ${fadeIn} 1.5s ease-in-out;
  }
`;
