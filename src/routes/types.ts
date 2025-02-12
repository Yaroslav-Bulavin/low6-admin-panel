import React from 'react';

import { RoutesEnum } from '@/enums/routes.enum';

export interface IRoutes {
  path: RoutesEnum;
  element: React.ReactNode;
  children?: IRoutes[];
}

export type TRoutesArgs = {
  path: RoutesEnum;
  params?: { id?: number | string };
  searchParams?: { [key: string]: string | number | undefined };
};

export type TArgsWithParams = Extract<
  TRoutesArgs,
  { path: RoutesEnum; params: any }
>;
