import React from "react";
import ReuseableForm from "../form/ReuseableForm";
import ReuseableInput from "../form/ReuseableInput";
import { Button, Col } from "antd";
import ReuseableSelect from "../form/ReuseableSelect";
import { skillTypeOptions } from "../../constant/skillOption";
import {
  useCreateSkillMutation,
  useGetSkillsQuery,
} from "../../redux/features/skills/skillEndpoints";
import { toast } from "sonner";
import { useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { skillCreateValidationSchema } from "../../schema/skillCreateValidationSchema";
import { categoryTypeOptions } from "../../constant/categoryOptions";

const SkillManagement = () => {
  const { data } = useGetSkillsQuery(undefined);
  // Filter out skillType where value already exists in dbSkillData
  const filteredSkillType = skillTypeOptions.filter(
    (skill) => !data?.data.some((dbSkill) => dbSkill.name === skill.value)
  );
  const [createSkill] = useCreateSkillMutation();

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating skill...");
    try {
      const res = await createSkill(data);
      if (res?.data?.success) {
        toast.success("Skill has been created successful", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Col xs={24} md={12} className="booking-col-left p-5">
      <div className="booking-form-container">
        <h2>Create skill</h2>
        <ReuseableForm
          onSubmit={onSubmit}
          resolver={zodResolver(skillCreateValidationSchema)}
        >
          <ReuseableSelect
            label="Name"
            name="name"
            options={filteredSkillType}
          ></ReuseableSelect>
          <ReuseableSelect
            label="Category"
            name="category"
            options={categoryTypeOptions}
          ></ReuseableSelect>
          <ReuseableInput
            type="text"
            name="title"
            label="Title"
          ></ReuseableInput>
          <Button htmlType="submit" color="primary">
            Create
          </Button>
        </ReuseableForm>
      </div>
    </Col>
  );
};

export default SkillManagement;
