import styled from 'styled-components';
import Tablet2x from '../../image/my-recipes-page/my-recipe-bg-tablet-2x.jpg';
import Tablet1x from '../../image/my-recipes-page/my-recipe-bg-tablet-1x.jpg';
import Mob1x from '../../image/my-recipes-page/my-recipe-bg-mobile-1x.jpg';
import Mob2x from '../../image/my-recipes-page/my-recipe-bg-mobile-2x.jpg';
import Desc1x from '../../image/my-recipes-page/my-recipe-bg-dekstop-1x.jpg';
import Desc2x from '../../image/my-recipes-page/my-recipe-bg-dekstop-2x.jpg';

export const Wrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  background-image: url(${Mob1x});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    background-image: url(${Tablet1x});
    height: 495px;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${Desc1x});
    height: 493px;
  }

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${Mob2x});

    @media only screen and (min-width: 768px) {
      background-image: url(${Tablet2x});
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${Desc2x});
    }
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.accentGreen};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 18px;
  margin-top: 80px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 24px;
    margin-top: 72px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const Description = styled.p`
  color: #23262a;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  margin-bottom: 24px;
  max-width: 303px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 506px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 30px;
    max-width: 656px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.accentGreen};
  font-size: 10px;
  line-height: 1.5;
  padding: 10px 18px;
  color: #22252a;
  margin-bottom: 42px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 278px;
    margin-bottom: 60px;
    padding: 18px 44px;
    border: 2px solid ${props => props.theme.colors.accentGreen};
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const Time = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  gap: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.24px;
  color: #23262a;
  & > svg {
    width: 14px;
    height: 14px;
  }
  & > span {
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43px;
    gap: 8px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
