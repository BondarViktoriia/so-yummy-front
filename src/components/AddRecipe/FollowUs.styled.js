import styled from 'styled-components';

export const FollowUsContainer = styled.div`
  display: flex;
  gap: 20px;
  svg {
    fill: ${props => props.theme.colors.iconFollow};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
      fill: #ffffff;
      background-color: #8baa36;
    }
  }
`;
