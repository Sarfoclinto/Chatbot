import { Form, Input, Button } from "antd";
import { ChangeEvent, useState } from "react";
import { UserInputTypes } from "../Modules/types";
import axios from "axios";

interface valuesTypes {
  emialAddress: string;
  password: string;
}

const LogInForm = () => {
  const [form] = Form.useForm();
  const [userInputs, setUserInputs] = useState<UserInputTypes>({
    emailAddress: "",
    password: "",
  });
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
  const onFinish = async (values: valuesTypes) => {
    const reply = await axios.post(
      "http://localhost/Chatbot/PHP/essai.php",
      values
    );
    console.log(reply);
  };

  return (
    <div className="border p-5 rounded-3xl">
      <Form
        onFinish={onFinish}
        className="mt-10"
        layout="vertical"
        form={form}
        autoComplete="off"
        action="http://localhost/Chatbot/essai.php"
        method="POST"
      >
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
          <Button type="primary" block htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogInForm;
