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
      invalidatesTags: ["projects"],
    }),
    getProjects: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/project",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["projects"],
    }),
    getSingleProjects: builder.query({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "GET",
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["projects"],
    }),
    updateProject: builder.mutation({
      query: (args) => {
        return {
          url: `/project/${args.key}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetSingleProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectEndpoints;
