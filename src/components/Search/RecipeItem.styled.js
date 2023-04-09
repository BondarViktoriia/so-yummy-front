import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  list-style: none;
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
`;
export const ImgItem = styled.img`
  border-radius: 8px;
`;
export const ImgTitle = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 3)
  }
  @media screen and (min-width: 768px) {
  }
`;

export const TitleWrapper = styled.div`
  width: 307px;
  min-height: 52px;
  background-color: ${props => props.theme.colors.listItemBcg};
  border-radius: 8px;
  position: absolute;
  bottom: 26px;
  display: inline-block;
  margin-left: 18px;
  margin-right: 18px;
  padding: 16px;
  display: flex;
  align-items: center;
`;
