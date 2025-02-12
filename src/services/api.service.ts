import { createApi } from '@reduxjs/toolkit/query/react';

import {
  CreateContestReqBody,
  GenerateAdminTokenReqBody,
  GetContestByIdRes,
  GetContestsRes,
  ScoreContestReqBody,
  UpdateContestReqBody,
} from '@/types';
import { baseQueryCustom } from '@/utils/api.util';

import { ApiTagsEnum } from '@/enums/apiTags.enum';
import { StorageKeysEnum } from '@/enums/storageKeys.enum';

export const api = createApi({
  reducerPath: 'mainApi',
  tagTypes: Object.values(ApiTagsEnum),
  baseQuery: baseQueryCustom,
  endpoints: (builder) => ({
    getContests: builder.query<GetContestsRes, void>({
      query: () => '/admin/contests',
      providesTags: [ApiTagsEnum.GET_CONTESTS],
    }),
    getContestById: builder.query<GetContestByIdRes, number>({
      query: (id) => `/contests/${id}`,
      providesTags: [ApiTagsEnum.GET_CONTEST_BY_ID],
    }),
    createContest: builder.mutation<{ success: boolean }, CreateContestReqBody>(
      {
        query: (body) => ({
          url: '/admin/contests',
          method: 'POST',
          body,
        }),
        invalidatesTags: [ApiTagsEnum.GET_CONTESTS],
      },
    ),
    updateContest: builder.mutation<{ success: boolean }, UpdateContestReqBody>(
      {
        query: ({ id, ...body }) => ({
          url: `/admin/contests/${id}`,
          method: 'PUT',
          body,
        }),
        invalidatesTags: [ApiTagsEnum.GET_CONTESTS],
      },
    ),
    generateAdminToken: builder.mutation<
      { token: string },
      GenerateAdminTokenReqBody
    >({
      query: (body) => ({
        url: '/admin/auth/admin',
        method: 'POST',
        body,
      }),
    }),
    scoreContest: builder.mutation<{ success: boolean }, ScoreContestReqBody>({
      query: ({ contest_id, ...body }) => ({
        url: `/admin/contests/${contest_id}/score`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetContestsQuery,
  useGetContestByIdQuery,
  useCreateContestMutation,
  useUpdateContestMutation,
  useGenerateAdminTokenMutation,
  useScoreContestMutation,
} = api;
