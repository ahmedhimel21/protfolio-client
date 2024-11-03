import { baseApi } from "../../api/baseApi";

const skillEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSkill: builder.mutation({
      query: (args) => {
        return {
          url: "/skill/create-skill",
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["skills"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => {
        return {
          url: `/skill/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["skills"],
    }),
    updateSkill: builder.mutation({
      query: (args) => {
        return {
          url: `/skill/${args.key}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["skills"],
    }),
    getSkills: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/skill",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["skills"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
} = skillEndpoints;
