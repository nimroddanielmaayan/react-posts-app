import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;

/* The RootLayout.jsx Component */

// <Outlet /> is a "placeholder" for the actual content that is nested inside <RootLayout />, when it's rendered in main.jsx
