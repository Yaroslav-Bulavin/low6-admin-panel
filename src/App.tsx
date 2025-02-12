import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import AppLayout from '@/AppLayout';
import { routesWithLayout, routesWithoutLayout } from '@/routes';

import Layout from '@/components/Layout';

import PrivateRoute from '@/elements/PrivateRoute';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routesWithoutLayout.map((route) => (
          <Route element={route.element} key={route.path} path={route.path} />
        ))}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            {routesWithLayout.map((route) => (
              <Route
                element={route.element}
                key={route.path}
                path={route.path}
              />
            ))}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
