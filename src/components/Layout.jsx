import React from 'react';
import { Header } from './Header';
import { Slider } from './Slider';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider />
      <main>{children}</main>
      <Outlet />
    </>
  );
};
