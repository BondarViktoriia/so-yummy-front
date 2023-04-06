import styled from 'styled-components';
import CheckedIcon from '../../image/icons/pick.png';

export const Wrapper = styled.div`
  width: 100%;
  transform: translateY(425px);
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    transform: translateY(480px);
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ListTitle = styled.div`
  background: #8baa36;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 21px 32px;
    gap: 38px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding: 21px 40px;
    gap: 110px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: #fafafa;
  &:first-child {
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 8px;
  background: ${props => props.theme.colors.ingredItemBcg};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 32px;
    padding-right: 70px;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const WrapForContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 78px;
    &:first-child {
      gap: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 151px;
    &:first-child {
      gap: 40px;
    }
  }
`;

export const Thumb = styled.div`
  width: 65px;
  height: 65px;

  @media screen and (min-width: 768px) {
    width: 144px;
    height: 146px;
  }

  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: contain;
`;

export const TitleIngred = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const MeasureStyled = styled.span`
  display: block;
  background: #8baa36;
  border-radius: 4px;
  padding: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 4px 8px;
  }
`;

export const OriginalCheckbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(126, 126, 126, 0.5);
  }

  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  position: relative;

  &:checked::after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-image: url(${CheckedIcon});
    background-size: 10px, 10px;
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
      background-size: 17px, 17px;
    }
  }
`;
