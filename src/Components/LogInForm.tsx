import { Form, Input, Button } from "antd";
import { ChangeEvent, useState } from "react";
import { UserInputTypes } from "../Modules/types";

const LogInForm = () => {
  const [form] = Form.useForm();
  const [userInputs, setUserInputs] = useState<UserInputTypes>({
    emailAddress: "",
    password: "",
  });
  const [loading] = useState<boolean>(false);

  const handleUserInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="border p-5 rounded-3xl">
      <Form className="mt-10" layout="vertical" form={form} autoComplete="off">
        <h4 className="text-center text-stone-400 font-medium">
          Enter your email address and password to <br /> access Doctor panel
        </h4>
        <Form.Item
          label="Email Address"
          name="emailAddress"
          rules={[
            { type: "email", message: "Please enter a valid email" },
            { required: true, message: "Field is required" },
          ]}
          wrapperCol={{ span: 30 }}
          labelCol={{ span: 7 }}
          hasFeedback
        >
          <Input
            name="emailAddress"
            placeholder="Enter your doctor number"
            allowClear
            value={userInputs.emailAddress}
            onChange={handleUserInputChange}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          wrapperCol={{ span: 30 }}
          labelCol={{ span: 7 }}
          rules={[
            {
              min: 8,
              message: "Password cannot be less than 8 characters",
            },
            { required: true, message: "Password is required" },
          ]}
          hasFeedback
        >
          <Input.Password
            name="password"
            placeholder="Enter password"
            allowClear
            value={userInputs.password}
            onChange={handleUserInputChange}
          />
        </Form.Item>
        <Form.Item className="mt-10">
          <Button
            type="primary"
            block
            htmlType="submit"
            loading={loading}
            disabled={loading ? true : false}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogInForm;
