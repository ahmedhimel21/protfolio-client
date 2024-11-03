import React, { useState } from "react";
import {
  useDeleteSkillMutation,
  useGetSkillsQuery,
  useUpdateSkillMutation,
} from "../redux/features/skills/skillEndpoints";
import { message, Modal, Pagination, Popconfirm, Table } from "antd";
import { Button } from "react-bootstrap";
import ReuseableInput from "../components/form/ReuseableInput";
import ReuseableSelect from "../components/form/ReuseableSelect";
import { toast } from "sonner";
import ReuseableForm from "../components/form/ReuseableForm";
import { categoryTypeOptions } from "../constant/categoryOptions";
import { skillTypeOptions } from "../constant/skillOption";

const SkillManagementTable = () => {
  const [page, setPage] = useState(1);
  const { data: skills, isFetching } = useGetSkillsQuery([
    { name: "page", value: page },
    { name: "sort", value: "-createdAt" },
  ]);

  const metaData = skills?.data?.meta;

  const [deleteSkill] = useDeleteSkillMutation();

  // delete confirmation functionalities
  const confirmDelete = async (_id) => {
    const res = await deleteSkill(_id);
    if (res?.data?.success) {
      message.success("Skill deleted successfully");
    }
  };

  const cancelDelete = () => {
    message.info("Skill deletion canceled");
  };

  // forming table data
  const tableData = skills?.data?.data?.map(
    ({ _id, name, title, category }) => ({
      key: _id,
      name,
      title,
      category,
    })
  );
  //table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
            <UpdateSkillModal data={item}></UpdateSkillModal>
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
        Skills Table
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
const UpdateSkillModal = ({ data }) => {
  const { key, title, category, name } = data;
  const [updateSkill] = useUpdateSkillMutation();
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
      name: value?.name,
      title: value?.title,
      category: value?.category,
    };
    try {
      const res = await updateSkill({ updateData, key });
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
        title="Skill Update"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <ReuseableForm onSubmit={onSubmit}>
          <ReuseableSelect
            label="Name"
            name="name"
            type="text"
            options={skillTypeOptions}
            initialValue={name}
          ></ReuseableSelect>
          <ReuseableInput
            label="Title"
            name="title"
            type="text"
            initialValue={title}
          ></ReuseableInput>
          <ReuseableSelect
            label="Category"
            name="category"
            type="text"
            options={categoryTypeOptions}
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

export default SkillManagementTable;
