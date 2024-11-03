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
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/blog",
          method: "GET",
          params: params,
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
    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      query: (args) => {
        return {
          url: `/blog/${args.key}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation
} = blogEndpoints;
