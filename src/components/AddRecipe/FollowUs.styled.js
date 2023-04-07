import styled from 'styled-components';

export const FollowUsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 100px;
  svg {
    fill: #8BAA36;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
      fill: #FFFFFF;
      background-color: #8BAA36;
    }
  }
`;
