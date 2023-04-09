import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyled = styled(Select)`

  width: 146px;
  margin-left: 15px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-weight: 1.5;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
  }
`;


