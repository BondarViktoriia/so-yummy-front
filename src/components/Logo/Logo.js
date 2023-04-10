import { Link } from 'react-router-dom';
import logo from '../../image/icons/logo-2x.png';
import logoLight from '../../image/icons/logo-light.png';
import { LogoImg, LogoLightImg } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <Link aria-current="page" to="/">
        <LogoImg src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export const LogoLight = () => {
  return (
    <div>
      <Link aria-current="page" to="/">
        <LogoLightImg src={logoLight} alt="logo" />
      </Link>
    </div>
  );
};
