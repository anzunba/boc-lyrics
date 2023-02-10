import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import { Appbar, Footer, Nav } from '../..';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Appbar />
      <Stack direction="row" minHeight="calc(100vh - 150px)" pt="150px">
        <Nav />
        {children}
      </Stack>
      <Footer />
    </>
  );
};

export default Layout;
