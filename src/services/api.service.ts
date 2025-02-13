import { createApi } from '@reduxjs/toolkit/query/react';

import {
  CreateContestReqBody,
  GenerateAdminTokenReqBody,
  GetContestByIdRes,
  GetContestsRes,
  GetOutcomesRes,
  ScoreContestReqBody,
  UpdateContestReqBody,
} from '@/types';
import { baseQueryCustom } from '@/utils/api.util';

import { ApiTagsEnum } from '@/enums/apiTags.enum';

export const api = createApi({
  reducerPath: 'mainApi',
  tagTypes: Object.values(ApiTagsEnum),
  baseQuery: baseQueryCustom,
  endpoints: (builder) => ({
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
    getOutcomes: builder.query<GetOutcomesRes, void>({
      query: () => '/admin/outcomes',
      providesTags: [ApiTagsEnum.GET_OUTCOMES],
    }),
  }),
});

export const { useGenerateAdminTokenMutation, useGetOutcomesQuery } = api;
