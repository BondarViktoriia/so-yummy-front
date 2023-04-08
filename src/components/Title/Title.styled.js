import styled from 'styled-components';

export const TitleS = styled.h1`
  font-family: 'Poppins, sans-serif';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.title};
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 44px;
  }
`;
