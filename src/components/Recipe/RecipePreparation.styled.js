import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 16px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 50px;
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
  color: ${props => props.theme.colors.textPrimary};
  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ListOfInstructions = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    gap: 18px;
  }
`;

export const ListItem = styled.li`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.ingredListText};
  display: flex;
  gap: 14px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const GreenCircle = styled.div`
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 50%;
  background-color: #8baa36;
  color: #ffffff;
  flex-shrink: 0;
`;

export const Thumb = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    max-width: 433px;
  }
`;

export const ImageRecipe = styled.img`
  display: block;
  object-fit: contain;
  overflow: hidden;
  border-radius: 8px;
`;
