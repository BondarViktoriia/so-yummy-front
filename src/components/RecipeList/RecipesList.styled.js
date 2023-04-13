import styled from 'styled-components';

export const ListSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 50px;
  margin-bottom: 40px;
    @media (min-width: 768px) {
    gap: 40px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;
