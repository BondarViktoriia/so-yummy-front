import styled from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
`;
