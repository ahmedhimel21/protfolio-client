import React from "react";
import ReuseableInput from "../form/ReuseableInput";
import { Controller } from "react-hook-form";
import { Button, Col, Form, Input } from "antd";
import ReuseableForm from "../form/ReuseableForm";
import { projectTypeOptions } from "../../constant/ProjectOptions";
import ReuseableSelect from "../form/ReuseableSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectCreateValidationSchema } from "../../schema/projectCreateValidationSchema";
import { toast } from "sonner";
import handleImageUpload from "../../utils/handleImageUpload";
import { useCreateProjectMutation } from "../../redux/features/project/projectEndpoints";
import { skillTypeOptions } from "../../constant/skillOption";

const ProjectManagement = () => {
  const [createProject] = useCreateProjectMutation();
  const onSubmit = async (value) => {
    const toastId = toast.loading("project creating...");
    const imageData = await handleImageUpload(value?.image);
    const image = imageData?.display_url;
    const createData = {
      title: value?.title,
      description: value?.description,
      github: value?.github,
      liveLink: value?.liveLink,
      category: value?.category,
      imgUrl: image,
      skills: value?.skills,
    };

    try {
      const res = await createProject(createData);
      if (res?.data?.success) {
        toast.success("project has been created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Col xs={24} md={12} className="booking-col-left p-5">
      <div className="booking-form-container">
        <h2>Create Project</h2>
        <ReuseableForm
          onSubmit={onSubmit}
          resolver={zodResolver(projectCreateValidationSchema)}
        >
          <ReuseableInput
            label="Title"
            name="title"
            type="text"
          ></ReuseableInput>
          <ReuseableInput
            label="Description"
            name="description"
            type="text"
          ></ReuseableInput>
          <ReuseableInput
            label="Github link"
            name="github"
            type="text"
          ></ReuseableInput>
          <ReuseableInput
            label="Live link"
            name="liveLink"
            type="text"
          ></ReuseableInput>
          <ReuseableSelect
            label="Category"
            name="category"
            options={projectTypeOptions}
          ></ReuseableSelect>
          <ReuseableSelect
            mode={"multiple"}
            label="Technology"
            name="skills"
            options={skillTypeOptions}
          ></ReuseableSelect>
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

export default ProjectManagement;
