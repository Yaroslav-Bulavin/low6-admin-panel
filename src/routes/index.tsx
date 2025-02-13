import { lazy } from 'react';

import { RoutesEnum } from '@/enums/routes.enum';

import { IRoutes } from '@/routes/types';

const HomePage = lazy(() => import('@/pages/Home'));
const LoginPage = lazy(() => import('@/pages/Login'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const OutcomesPage = lazy(() => import('@/pages/Outcomes'));

export const routesWithLayout: IRoutes[] = [
  {
    path: RoutesEnum.home,
    element: <HomePage />,
  },
  {
    path: RoutesEnum.dashboard,
    element: <DashboardPage />,
  },
  {
    path: RoutesEnum.outcomes,
    element: <OutcomesPage />,
  },
];

export const routesWithoutLayout: IRoutes[] = [
  {
    path: RoutesEnum.login,
    element: <LoginPage />,
  },
];
