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
      invalidatesTags: ["blogs"],
    }),
    getBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        };
      },
      providesTags: ["blogs"],
    }),
    getSingleBlog: builder.query({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useGetSingleBlogQuery,
} = blogEndpoints;
