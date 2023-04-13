import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const MyPaginate = styled(ReactPaginate).attrs({
  containerClassName: 'pagination',
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  max-width: 275px;
  margin: 0 auto;
  margin-bottom: 100px;
  background: ${p => p.theme.colors.background};
  @media screen and (min-width: 768px) {
    max-width: 436px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
  li {
    margin-top: 12px;
    margin-bottom: 12px;
    color: ${p => p.theme.colors.arrowColor};
    @media screen and (min-width: 768px) {
      margin-top: 14px;
      margin-bottom: 14px;
    }
  }
  li a {
    border-radius: 100%;
    padding: 5px 11px;
    cursor: pointer;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-right: 18px;
    color: ${p => p.theme.colors.paginationNumbers};
    @media screen and (min-width: 768px) {
      margin-right: 24px;
    }
  }
  li.previous a {
    padding-left: 28px;
    @media screen and (min-width: 768px) {
      padding-left: 24px;
    }
  }
  li.previous a,
  li.next a {
    font-weight: 500;
    font-size: 20px;
    padding-right: 28px;
    margin-right: 0;
    @media screen and (min-width: 768px) {
      padding-right: 24px;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: none;
  }
  li.active a {
    background-color: ${p => p.theme.colors.logoLight};
    border-color: transparent;
    color: ${p => p.theme.colors.footer};
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: not-allowed;
  }
`;
