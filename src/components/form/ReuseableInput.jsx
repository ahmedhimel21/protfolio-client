import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const ReuseableInput = ({ type, name, label, initialValue, disabled }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        defaultValue={initialValue}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item initialValue={10000} label={label}>
            <Input
              size="large"
              {...field}
              type={type}
              id={name}
              disabled={disabled}
            />
            <div>
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </div>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default ReuseableInput;
