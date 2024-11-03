import React, { useState } from "react";
import { message, Modal, Pagination, Popconfirm, Table } from "antd";
import { Button } from "react-bootstrap";
import ReuseableInput from "../components/form/ReuseableInput";
import ReuseableSelect from "../components/form/ReuseableSelect";
import { toast } from "sonner";
import ReuseableForm from "../components/form/ReuseableForm";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
  useUpdateProjectMutation,
} from "../redux/features/project/projectEndpoints";
import { projectTypeOptions } from "./../constant/ProjectOptions";
import { skillTypeOptions } from "../constant/skillOption";

const ProjectManagementTable = () => {
  const [page, setPage] = useState(1);
  const { data: projects, isFetching } = useGetProjectsQuery([
    { name: "page", value: page },
    { name: "sort", value: "-createdAt" },
  ]);

  const metaData = projects?.data?.meta;

  const [deleteProject] = useDeleteProjectMutation();

  // delete confirmation functionalities
  const confirmDelete = async (_id) => {
    const res = await deleteProject(_id);
    if (res?.data?.success) {
      message.success("Project deleted successfully");
    }
  };

  const cancelDelete = () => {
    message.info("Project deletion canceled");
  };

  // forming table data
  const tableData = projects?.data?.data?.map(
    ({
      _id,
      title,
      description,
      imgUrl,
      github,
      liveLink,
      category,
      skills,
    }) => ({
      key: _id,
      title,
      description,
      imgUrl,
      github,
      liveLink,
      category,
      skills,
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
      title: "Github",
      dataIndex: "github",
      key: "github",
    },
    {
      title: "Live Link",
      dataIndex: "liveLink",
      key: "liveLink",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
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
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Projects Table
      </h1>
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
  const {
    key,
    title,
    description,
    imgUrl,
    github,
    liveLink,
    category,
    skills,
  } = data;
  const [updateProject] = useUpdateProjectMutation();
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
      description: value?.description,
      imgUrl: value?.imgUrl,
      github: value?.github,
      liveLink: value?.liveLink,
      skills: value?.skills,
      category: value?.category,
    };
    try {
      const res = await updateProject({ updateData, key });
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
        title="Project Update"
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
            label="Description"
            name="description"
            type="text"
            initialValue={description}
          ></ReuseableInput>
          <ReuseableInput
            label="Image"
            name="imgUrl"
            type="text"
            initialValue={imgUrl}
          ></ReuseableInput>
          <ReuseableInput
            label="Github"
            name="github"
            type="text"
            initialValue={github}
          ></ReuseableInput>
          <ReuseableInput
            label="Live Link"
            name="liveLink"
            type="text"
            initialValue={liveLink}
          ></ReuseableInput>
          <ReuseableSelect
            label="Skills"
            name="skills"
            type="text"
            options={skillTypeOptions}
            mode={"multiple"}
            initialValue={skills}
          ></ReuseableSelect>
          <ReuseableSelect
            label="Category"
            name="category"
            type="text"
            options={projectTypeOptions}
            initialValue={category}
          ></ReuseableSelect>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </ReuseableForm>
      </Modal>
    </>
  );
};

export default ProjectManagementTable;
