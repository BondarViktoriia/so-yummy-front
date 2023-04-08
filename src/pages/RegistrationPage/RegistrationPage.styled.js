import styled from 'styled-components';
import regBgMobile from '../../image/start-page/auth-bottom-mobile-1x.png';
import regBgTablet from '../../image/start-page/auth-bottom-tablet-1x.png';
import regBgDesktop from '../../image/start-page/auth-bottom-dekstop-1x.png';
import regImage from '../../image/start-page/auth-illustration-dekstop-1x.png';
import regImageRetina from '../../image/start-page/auth-illustration-mobile-2x.png';
import regImageTablet from '../../image/start-page/auth-illustration-tablet-1x.png';
import regImageTabletRetina from '../../image/start-page/auth-illustration-tablet-2x.png';
import regImageDesktop from '../../image/start-page/auth-illustration-dekstop-2x.png';

export const AuthMain = styled.main`
  position: relative;
  height: 100vh;
  padding-top: 87px;
  @media screen and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 122px;
    padding-bottom: 122px;
  }
`;

export const AuthImage = styled.div`
  width: 285px;
  height: 250px;
  margin: 0 auto;
  background-image: url(${regImage});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${regImageRetina});
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
    background-image: url(${regImageTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${regImageTabletRetina});
      background-size: cover;
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 113px;
    top: 45%;
    width: 532px;
    height: 468px;
    background-image: url(${regImageDesktop});
    transform: translateY(-50%);
  }
`;

export const AuthBackground = styled.div`
  width: 100%;
  height: 490px;
  background-image: url(${regBgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 606px;
    background-image: url(${regBgTablet});
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: 325px;
    background-image: url(${regBgDesktop});
  }
`;
