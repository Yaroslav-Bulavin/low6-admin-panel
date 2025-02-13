import { lazy } from 'react';

import { RoutesEnum } from '@/enums/routes.enum';

import { IRoutes } from '@/routes/types';

const HomePage = lazy(() => import('@/pages/Home'));
const ContestsPage = lazy(() => import('@/pages/Contests'));
const ContestPage = lazy(() => import('@/pages/Contest'));
const LoginPage = lazy(() => import('@/pages/Login'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));

export const routesWithLayout: IRoutes[] = [
  {
    path: RoutesEnum.home,
    element: <HomePage />,
  },
  {
    path: RoutesEnum.contests,
    element: <ContestsPage />,
  },
  {
    path: RoutesEnum.contest,
    element: <ContestPage />,
  },
  {
    path: RoutesEnum.dashboard,
    element: <DashboardPage />,
  },
];

export const routesWithoutLayout: IRoutes[] = [
  {
    path: RoutesEnum.login,
    element: <LoginPage />,
  },
];
