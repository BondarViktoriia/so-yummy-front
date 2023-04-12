import styled from 'styled-components';

export const AddRecipeWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const TitleFollowUs = styled.h3`
  color: ${props => props.theme.colors.textPrimary};

  @media screen and (max-width: 1439px) {
    display: none;
    color: ${props => props.theme.colors.textPrimary};
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    color: #3e4462;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export const WrapperFollowUs = styled.div`
  margin-top: 72px;

  @media screen and (min-width: 1440px) {
    margin-top: 93px;
    margin-left: 322px;
  }
`;

export const FollowUsThumb = styled.div`
  margin-bottom: 100px;
`;
