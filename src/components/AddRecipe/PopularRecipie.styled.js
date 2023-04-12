import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperPopular = styled.div`
  margin-top: 72px;
  margin-bottom:100px;
 
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const TitlePopular = styled.h3`
  color: ${props => props.theme.colors.textPrimary};

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ListPopular = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const ListItemPopular = styled.li`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
  &:nth-child(2) {
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 24px;
    }
  }
  @media screen and (min-width:768px ) {
    max-width: 336px;
  }
`;

export const ListLinkPopular = styled(NavLink)`
  display: flex;
  gap: 12px;
`;

export const ItemImg = styled.img`
  width: 104px;
  border-radius: 8px;

`;

export const ItemWrapper = styled.div``;

export const ItemTitle = styled.h4`
  margin-bottom: 3px;
color: ${props => props.theme.colors.textPrimary};
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
`;

export const ItemText = styled.p`
  color: #7e7e7e;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;