import React from "react";
import { Card, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    <Card
      title="LOGIN"
      bordered={false}
      headStyle={{
        backgroundColor: "#00008B",
        color: "#fff"
      }}
      style={{
        width: 300,
        border: "2px solid #00008B",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 600
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password
            style={{ borderColor: "#00008B", borderRadius: "2px" }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
          style={{
            marginTop: "10px"
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#00008B" }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Link to="/create"></Link> {/* Link to the Create page */}
        <Link to="/delete"></Link> {/* Link to the Delete page */}
        <Link to="/edit"></Link> {/* Link to the Edit page */}
    </Card>
  </div>
);

export default Login;
