import styled from 'styled-components';

import squareLeftMob from '../../image/shared-layout/square-left-mob.png';
import squareLeftMob2x from '../../image/shared-layout/spinach-bg-leaf-mob@2x.png';
import squareLeftDesk from '../../image/shared-layout/square-left-desktop.png';
import squareLeftDes2x from '../../image/shared-layout/square-right-desktop@2x.png';
import squareRightMob from '../../image/shared-layout/square-right-mob.png';
import squareRightMob2x from '../../image/shared-layout/square-right-mob@2x.png';
import squareRightDesk from '../../image/shared-layout/square-right-desktop.png';
import squareRightDesk2x from '../../image/shared-layout/square-right-desktop@2x.png';
import squareCenterMob from '../../image/shared-layout/square-center-mob.png';
import squareCenterMob2x from '../../image/shared-layout/square-center-mob@2x.png';
import squareCenterDesk from '../../image/shared-layout/square-center-desktop.png';
import squareCenterDesk2x from '../../image/shared-layout/square-center-desktop@2x.png';
import spinachLeftMob from '../../image/shared-layout/spinach-bg-leaf-mob.png';
import spinachLeftMob2x from '../../image/shared-layout/spinach-bg-leaf-mob@2x.png';
import spinachLeftTablet from '../../image/shared-layout/spinach-bg-leaf-tablet.png';
import spinachLeftTablet2x from '../../image/shared-layout/spinach-bg-leaf-tablet@2x.png';
import spinashLeftDesktop from '../../image/shared-layout/spinach-bg-leaf-desktop.png';
import spinashLeftDesktop2x from '../../image/shared-layout/spinach-bg-leaf-desktop@2x.png';

export const SharedLayoutBg = styled.div`
  /* padding-top: 114px; */
  background-image: url(${squareLeftMob}), url(${squareCenterMob}),
    url(${squareRightMob});
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-repeat: no-repeat;
  background-position: top 76px left 120px, top 142px left 247px,
    top 109px left 349px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${squareLeftMob2x}), url(${squareCenterMob2x}),
      url(${squareRightMob2x});
  }

  @media screen and (min-width: 768px) {
    /* padding-top: 136px; */
    background-image: url(${squareLeftDesk}), url(${squareCenterDesk}),
      url(${squareRightDesk});
    background-size: 18px 17px, 15px 15px, 18px 17px;
    background-position: top 85px left 219px, top 155px left 437px,
      top 98px left 726px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${squareLeftDes2x}), url(${squareCenterDesk2x}),
        url(${squareRightDesk2x});
    }
  }

  @media screen and (min-width: 1440px) {
    /* padding-top: 164px; */
    background-position: top 116px left 328px, top 200px left 807px,
      top 129px left 1000px;
  }
`;

export const SharedLayoutContainer = styled.section`
  /* padding-bottom: 100px; */
  background-image: url(${spinachLeftMob});
  background-size: 315px 487px;
  background-repeat: no-repeat;
  background-position: bottom -225px left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${spinachLeftMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${spinachLeftTablet});
    background-size: 500px 790px;
    background-repeat: no-repeat;
    background-position: bottom -380px left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachLeftTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    /* padding-bottom: 118px; */
    background-image: url(${spinashLeftDesktop});
    background-size: 696px 1037px;
    background-repeat: no-repeat;
    background-position: bottom -518px left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinashLeftDesktop2x});
    }
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
