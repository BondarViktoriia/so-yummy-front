import { Link } from 'react-router-dom';
import logo from '../../image/icons/logo-2x.png';
import { LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <Link aria-current="page" to="/">
        <LogoImg src={logo} alt="logo" />
      </Link>
    </div>
  );
};
