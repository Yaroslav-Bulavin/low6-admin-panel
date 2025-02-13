import React, { SVGProps, useMemo } from 'react';

import { Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoDocuments } from 'react-icons/io5';
import {
  MdBarChart,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
} from 'react-icons/md';
import { NavLinkProps, useLocation } from 'react-router-dom';

import { RoutesEnum } from '@/enums/routes.enum';

export type AppNavType = {
  name: string;
  path: string;
  icon: React.ReactNode;
  secondary?: boolean;
  // component: React.ReactNode;
};
export const useAppNav = () => {
  const { pathname } = useLocation();

  const navLinks = useMemo<AppNavType[]>(
    () => [
      {
        name: 'Dashboard',
        path: '/dashboard', //TODO: add enum
        icon: <Icon as={MdHome} color='inherit' height='20px' width='20px' />,
        // component: <MainDashboard />,
      },
      {
        name: 'Outcomes',
        path: '/outcomes',
        icon: <Icon as={MdHome} color='inherit' height='20px' width='20px' />,
        // component: <MainDashboard />,
      },
      {
        name: 'Bets',
        path: '/bets',
        icon: <Icon as={MdHome} color='inherit' height='20px' width='20px' />,
        // component: <MainDashboard />,
      },
    ],
    [pathname],
  );

  return { navLinks };
};
