import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const ReuseableSelect = ({ label, name, options, mode, initialValue }) => {
  return (
    <Controller
      defaultValue={initialValue}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item initialValue={10000} label={label}>
          <Select
            mode={mode}
            size="large"
            style={{ width: "100%" }}
            {...field}
            options={options}
          ></Select>
          <div>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default ReuseableSelect;
