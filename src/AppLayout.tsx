import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { LocalStorageProvider } from '@/contexts/localStorage.context';

import { PageLoader } from '@/elements/PageLoader';

const AppLayout: React.FC = () => {
  return (
    <LocalStorageProvider>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </LocalStorageProvider>
  );
};

export default AppLayout;
