import React from 'react';
import { ReactComponent as SvgLogoInv } from '../../image/icons/logo-1x.png';
const Logo = ({ inv, width, height }) => {
  if (inv) {
    return <SvgLogoInv style={{ width: width, height: height }} />;
  }
};

export default Logo;
