import styled from 'styled-components';

export const FavoritesBox = styled.div`
margin: 148px 0`

export const TemporaryTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 100px;
  color: ${p => p.theme.colors.title};
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 44px;
  }`;

  export const EmptyList = styled.p`
  height: 100vh`