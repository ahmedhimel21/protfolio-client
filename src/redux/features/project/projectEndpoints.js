import { baseApi } from "../../api/baseApi";

const projectEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (args) => {
        return {
          url: "/project/create-project",
          method: "POST",
          body: args,
        };
      },
    }),
    getProjects: builder.query({
      query: () => {
        return {
          url: "/project",
          method: "GET",
        };
      },
    }),
    getSingleProjects: builder.query({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetSingleProjectsQuery,
  useCreateProjectMutation,
} = projectEndpoints;
