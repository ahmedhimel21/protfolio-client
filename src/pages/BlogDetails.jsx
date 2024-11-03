import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../redux/features/blog/blogEndpoints";
import { NavBar } from "../components/NavBar";
import BlogDetailsCard from "../components/BlogDetailsCard";

const BlogDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBlogQuery(id);
  const blog = data?.data;
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ marginTop: "100px" }}>
        <BlogDetailsCard {...blog}></BlogDetailsCard>
      </div>
    </div>
  );
};

export default BlogDetails;
