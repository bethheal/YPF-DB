import React from 'react';
import { Outlet } from 'react-router-dom';
import TemporaryDrawer from '../sideBar/sideBar';

const Layout = () => {
  return (
    <div>
      <TemporaryDrawer />
      <Outlet /> 
    </div>
  );
};

export default Layout;
