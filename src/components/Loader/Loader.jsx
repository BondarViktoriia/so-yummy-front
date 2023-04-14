import React from 'react';
import { Circles } from 'react-loader-spinner';
import { BoxForLoader } from './Loader.style';

export const Loader = () => (
  <BoxForLoader>
    <Circles
      height="100"
      width="100"
      color="#8BAA36"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </BoxForLoader>
);
