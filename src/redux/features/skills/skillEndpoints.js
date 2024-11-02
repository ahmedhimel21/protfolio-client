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
    getSkills: builder.query({
      query: () => {
        return {
          url: "/skill",
          method: "GET",
        };
      },
      providesTags: ["skills"],
    }),
  }),
});

export const { useGetSkillsQuery, useCreateSkillMutation } = skillEndpoints;
