import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '@/env';
import { getStorageItem } from '@/utils/localStorage.util';

import { RoutesEnum } from '@/enums/routes.enum';
import { StorageKeysEnum } from '@/enums/storageKeys.enum';

export const prepareHeaders = (headers: Headers) => {
  const jwt = getStorageItem<string>(StorageKeysEnum.jwt);

  if (jwt) {
    headers.set('authorization', `Bearer ${jwt}`);
  }

  return headers;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders,
});

export const baseQueryCustom: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    localStorage.removeItem(StorageKeysEnum.jwt);
    window.location.assign(RoutesEnum.login);
  }

  return result;
};
