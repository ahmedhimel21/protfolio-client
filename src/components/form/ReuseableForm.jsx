/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FormProvider, useForm } from "react-hook-form";

const ReuseableForm = ({ onSubmit, children, defaultValues, resolver }) => {
  const formConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default ReuseableForm;
