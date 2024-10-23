import { Button, Col, Form, Input } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReuseableForm from "../form/ReuseableForm";
import ReuseableInput from "../form/ReuseableInput";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogCreateValidationSchema } from "../../schema/blogCreateValidationSchema";
import handleImageUpload from "../../utils/handleImageUpload";
import { useCreateBlogMutation } from "../../redux/features/blog/blogEndpoints";
import { toast } from "sonner";

const BlogManagement = () => {
  const [content, setContent] = useState("");

  const [createBlog] = useCreateBlogMutation();

  const onSubmit = async (data) => {
    const imageData = await handleImageUpload(data?.image);
    const image = imageData?.display_url;
    let blogData = {
      title: data?.title,
      content: content.replace(/<[^>]+>/g, ""),
      image: image,
    };
    try {
      const toastId = toast.loading("Blog creating...");
      const res = await createBlog(blogData);
      if (res?.data?.success) {
        toast.success("Blog has been created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Col xs={24} md={12} className="booking-col-left p-5">
      <div className="booking-form-container">
        <h2>Create Blog</h2>
        <ReuseableForm
          onSubmit={onSubmit}
          resolver={zodResolver(blogCreateValidationSchema)}
        >
          <ReuseableInput
            label="Title"
            name="title"
            type="text"
          ></ReuseableInput>
          <ReactQuill
            placeholder="Create your experienced"
            style={{ marginBottom: "12px" }}
            value={content}
            onChange={setContent}
          />
          <Controller
            name="image"
            render={({
              field: { onChange, value, ...field },
              fieldState: { error },
            }) => (
              <Form.Item label="Picture">
                <Input
                  type="file"
                  value={value?.fileName}
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                ></Input>
                <div>
                  {error && (
                    <small style={{ color: "red" }}>{error.message}</small>
                  )}
                </div>
              </Form.Item>
            )}
          ></Controller>
          <Button htmlType="submit" color="primary">
            Create
          </Button>
        </ReuseableForm>
      </div>
    </Col>
  );
};

export default BlogManagement;
