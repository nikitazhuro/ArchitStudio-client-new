import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../../http/baseQueryWithReauth';
import { CreateProjectDto } from '../../types/project/create-project.dto';

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    createProject: builder.mutation<any, CreateProjectDto>({
      query: (createProjectDto: CreateProjectDto) => ({
        url: 'project/create',
        method: 'POST',
        body: createProjectDto,
      }),
      invalidatesTags: ['Project'],
    }),
    getProject: builder.query({
      query: (uuid: string) => ({
        url: `project/${uuid}`,
        method: 'GET',
      }),
    }),
    getProjects: builder.query<any, void>({
      query: () => 'project',
      providesTags: ['Project'],
    }),
    deleteProject: builder.mutation({
      query: (body) => ({
        url: '/project',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useDeleteProjectMutation,
  useGetProjectQuery,
} = projectApi;
