import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './SuperBtn.module.css';

const SuperBtn = ({
  typeBtn,
  lnk,
  to,
  otln,
  otlnInv,
  title,
  dark,
  welcome,
  disabled = false,
  children,
  statefrom,
}) => {
  if (lnk) {
    return (
      <Link
        className={clsx(css.common, {
          [css.lnk]: lnk,
          [css.outlined]: otln,
          [css.outlinedInverted]: otlnInv,
          [css.dark]: dark,
          [css.welcome]: welcome,
        })}
        to={to}
        state={statefrom}
      >
        {title}
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={clsx(css.common, css.btn, {
          [css.outlined]: otln,
          [css.outlinedInverted]: otlnInv,
          [css.dark]: dark,
          [css.welcome]: welcome,
        })}
        type={typeBtn}
        disabled={disabled}
      >
        {title}
        {children}
      </button>
    );
  }
};

export default SuperBtn;
