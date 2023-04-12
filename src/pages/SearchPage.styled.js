import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 375px;
  margin-top: 114px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const Title = styled.h1`
  display: flex;
  color: ${props => props.theme.colors.title};
  margin-bottom: 50px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    margin-bottom: 50px;
  }

`;

export const PictureSearch = styled.picture`
  display: inline-block;
  margin-bottom:32px;
`;

export const LookingP = styled.p`
  @media screen and (min-width: 768px) {
    color: ${props => props.theme.colors.textPrimary};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    margin-bottom:200px;
  }
`;
