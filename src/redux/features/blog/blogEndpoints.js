import { baseApi } from "../../api/baseApi";

const blogEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (args) => {
        return {
          url: "/blog/create-blog",
          method: "POST",
          body: args,
        };
      },
    }),
    getBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetBlogsQuery, useCreateBlogMutation } = blogEndpoints;