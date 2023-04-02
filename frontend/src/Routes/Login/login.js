import React, { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
// import ServerService from "../../../API/ServerService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
//import { setAdmin } from "../../../store/actions/actions";

export default function Login() {
  //   const [Navigate, setNavigate] = useState(null);
  let history = useNavigate();
  const forgotPassword = () => {
    //loading msg
    let key = "updatable";
    message.loading({ content: "Action in progress...", key });

    // Calling the Forgot password API
    //     ServerService.forgotPassword()
    //       .then((res) => {
    //         message.success({
    //           content: "E-Mail sent successfully!",
    //           key,
    //           duration: 2,
    //         });
    //       })
    //       .catch((err) => {
    //         // console.log(err);
    //         message.error({ content: "Something went wrong!", key, duration: 2 });
    //       });
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 4,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 4,
    },
  };

  const onFinish = (values) => {
    // console.log("Values:", values);

    //loading msg
    let key = "updatable";
    message.loading({ content: "Action in progress...", key });
    message.success({
      content: "Logged in successfully!",
      key,
      duration: 2,
    });
    history("/");

    // Calling the login API
    // ServerService.Login(values)
    //   .then((res) => {
    //     // console.log(res);
    //     message.success({
    //       content: "Logged in successfully!",
    //       key,
    //       duration: 2,
    //     });
    //     localStorage.setItem("token", res.data.token);
    //     setNavigate("/Bytepad-siadmin/AddPapers");
    //   })
    //   .catch((err) => {
    //     message.error({
    //       content: "Password entered is incorrect!",
    //       key,
    //       duration: 2,
    //     });
    //     // console.log(err);
    //   });
  };

  // If validation fails
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  // to Navigate to addView Route
  //   if (Navigate != null) {
  //     return <Navigate to={"/dashboard"} />;
  //   }

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ paddingTop: "35px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <p className="forgotPass" onClick={forgotPassword}>
          Forgot Password?
        </p>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
