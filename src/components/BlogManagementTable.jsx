import React, { useState } from "react";
import { message, Modal, Pagination, Popconfirm, Table } from "antd";
import { Button } from "react-bootstrap";
import ReuseableInput from "../components/form/ReuseableInput";
import { toast } from "sonner";
import ReuseableForm from "../components/form/ReuseableForm";
import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../redux/features/project/projectEndpoints";
import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "../redux/features/blog/blogEndpoints";

const BlogManagementTable = () => {
  const [page, setPage] = useState(1);
  const { data: blogs, isFetching } = useGetBlogsQuery([
    { name: "page", value: page },
    { name: "sort", value: "-createdAt" },
  ]);

  const metaData = blogs?.data?.meta;

  const [deleteBlog] = useDeleteBlogMutation();

  // delete confirmation functionalities
  const confirmDelete = async (_id) => {
    const res = await deleteBlog(_id);
    if (res?.data?.success) {
      message.success("Blog deleted successfully");
    }
  };

  const cancelDelete = () => {
    message.info("Blog deletion canceled");
  };

  // forming table data
  const tableData = blogs?.data?.data?.map(
    ({ _id, title, content, image }) => ({
      key: _id,
      title,
      content,
      image,
    })
  );
  //table columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <UpdateProjectModal data={item}></UpdateProjectModal>
            <Popconfirm
              title="Are you sure to delete this service?"
              onConfirm={() => confirmDelete(item?.key)}
              onCancel={cancelDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button variant="danger">Delete</Button>
            </Popconfirm>
          </div>
        );
      },
      width: "1%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Blogs Table</h1>
      <Table
        columns={columns}
        dataSource={tableData}
        loading={isFetching}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};

// update modal
const UpdateProjectModal = ({ data }) => {
  const { key, title, content, image } = data;
  const [updateBlog] = useUpdateBlogMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (value) => {
    const toastId = toast.loading("Updating...");
    const updateData = {
      title: value?.title,
      content: value?.content,
      image: value?.image,
    };
    try {
      const res = await updateBlog({ updateData, key });
      if (res?.data?.success) {
        setIsModalOpen(false);
        toast.success("Updated Successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <>
      <Button onClick={showModal} variant="primary">
        Update
      </Button>
      <Modal
        title="Blog Update"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <ReuseableForm onSubmit={onSubmit}>
          <ReuseableInput
            label="Title"
            name="title"
            type="text"
            initialValue={title}
          ></ReuseableInput>
          <ReuseableInput
            label="Content"
            name="content"
            type="text"
            initialValue={content}
          ></ReuseableInput>
          <ReuseableInput
            label="Image"
            name="image"
            type="text"
            initialValue={image}
          ></ReuseableInput>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </ReuseableForm>
      </Modal>
    </>
  );
};

export default BlogManagementTable;
