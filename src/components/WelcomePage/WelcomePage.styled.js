import styled from 'styled-components';

import bgiDesktop from '../../image/start-page/main-pic-dekstop-1x.jpg';
import bgiMobile from '../../image/start-page/main-pic-mobile-1x.jpg';
import bgiTablet from '../../image/start-page/main-pic-tablet-1x.jpg';
import bgiDesktopRetina from '../../image/start-page/main-pic-dekstop-2x.jpg';
import bgiMobileRetina from '../../image/start-page/main-pic-mobile-2x.jpg';
import bgiTabletRetina from '../../image/start-page/main-pic-tablet-2x.jpg';

export const WelcomeContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

export const BackgroundImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 35px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgiMobile});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgiMobileRetina});
  }
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgiTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${bgiTabletRetina});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgiDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${bgiDesktopRetina});
    }
  }
`;

export const WelcomeIcon = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeTextFormat = styled.div`
  margin: 0 auto 40px;
  text-align: center;
  max-width: 305px;
`;

export const WelcomeTitle = styled.h1`
  margin-bottom: 14px;
  text-align: center;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  } ;
`;

export const WelcomeText = styled.p`
  margin-bottom: 44px;
  max-width: 305px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    max-width: 505px;
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 540px;
  } ;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  } ;
`;

export const RegistrationButton = styled.div`
  width: 132px;
  height: 45px;
  font-size: 14px;
  font-size: inherit;
  line-height: 1.5;
`;

export const ImgIcon = styled.img`
  width: 54px;
  height: 54px;
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    margin: 0 auto 44px;
  }
`;
