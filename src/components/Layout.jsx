import React from 'react';
import { Header } from './Header';
import { Slider } from './Slider';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <Slider />
      <Header />
      <main>{children}</main>
      <Outlet />
    </>
  );
};
