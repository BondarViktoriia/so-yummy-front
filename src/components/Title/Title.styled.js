import styled from 'styled-components';

import LM1x from '../../image/shared-layout/square-left-mob.png';
import LM2x from '../../image/shared-layout/square-left-mob@2x.png';
import LD1x from '../../image/shared-layout/square-left-desktop.png';
import LD2x from '../../image/shared-layout/square-left-desktop@2x.png';
import CM1x from '../../image/shared-layout/square-center-mob.png';
import CM2x from '../../image/shared-layout/square-center-mob@2x.png';
import CD1x from '../../image/shared-layout/square-center-desktop.png';
import CD2x from '../../image/shared-layout/square-center-desktop@2x.png';
import RM1x from '../../image/shared-layout/square-right-mob.png';
import RM2x from '../../image/shared-layout/square-right-mob@2x.png';
import RD1x from '../../image/shared-layout/square-right-desktop.png';
import RD2x from '../../image/shared-layout/square-right-desktop@2x.png';

export const TitleS = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.title};
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const TitleWrap = styled.div`
  position: relative;
  margin-top: 64px;
  padding-top: 50px;
  padding-left: 16px;
  @media (min-width: 768px) {
    padding-top: 72px;
    padding-left: 32px;
  }
  @media (min-width: 1440px) {
    padding-top: 104px;
    padding-left: 100px;
  }
`;

export const LeftSquare = styled.div`
  background-image: url(${LM1x});
  background-size: cover;
  background-position: center;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 12px;
  left: 120px;
  @media only screen and (min-width: 768px) {
    background-image: url(${LD1x});
    width: 14px;
    height: 14px;
    top: 21px;
    left: 219px;
  }
  @media only screen and (min-width: 1440px) {
    top: 52px;
    left: 326px;
  }
  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${LM2x});
    @media only screen and (min-width: 768px) {
      background-image: url(${LD2x});
    }
  }
`;
export const CenterSquare = styled.div`
  background-image: url(${CM1x});
  background-size: cover;
  background-position: center;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 78px;
  left: 247px;

  @media only screen and (min-width: 768px) {
    background-image: url(${CD1x});
    width: 12px;
    height: 12px;
    top: 91px;
    left: 437px;
  }
  @media only screen and (min-width: 1440px) {
    top: 135px;
    left: 807px;
  }
  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${CM2x});

    @media only screen and (min-width: 768px) {
      background-image: url(${CD2x});
    }
  }
`;
export const RightSquare = styled.div`
  background-image: url(${RM1x});
  background-size: cover;
  background-position: center;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 45px;
  right: 16px;

  @media only screen and (min-width: 768px) {
    background-image: url(${RD1x});
    width: 14px;
    height: 14px;
    top: 34px;
    right: 23px;
  }
  @media only screen and (min-width: 1440px) {
    top: 65px;
    right: 171px;
  }
  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${RM2x});

    @media only screen and (min-width: 768px) {
      background-image: url(${RD2x});
    }
  }
`;
