import React, { useState } from "react";
import { Button, Input, Alert, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
const bcrypt=require("bcryptjs");
import axios from "axios";
function SingUp() {
  const [verif, setverif] = useState(false);
  const [username, setUsername] = useState(false);
  const [emal, setemail] = useState(false);
  let fullname = "";
  let email = "";
  let phone = "";
  let password = "";
  let confirmPassword = "";
  const add = (fullname, email, phone, password) => {
    try {
      axios
        .post("http://localhost:3000/api/user/addUser", {
          username: fullname,
          email: email,
          password: bcrypt.hashSync(password),
          phoneN: phone,
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Full Name"
        prefix={<UserOutlined />}
        onChange={(e) => {
          fullname = e.target.value;
        }}
      />
      {username && (
        <>
          {" "}
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          ></Space>
          <Alert
            message="Password and Confirm Password do not match Text"
            type="error"
          />
        </>
      )}
      <Input
        type="text"
        placeholder="Email"
        prefix={<MailOutlined />}
        onChange={(e) => {
          email = e.target.value;
        }}
      />
      <Input
        type="text"
        placeholder="Phone Number"
        prefix={<PhoneOutlined />}
        onChange={(e) => {
          phone = e.target.value;
        }}
      />
      <Input
        type="password"
        placeholder="Password"
        prefix={<LockOutlined />}
        onChange={(e) => {
          password = e.target.value;
        }}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        prefix={<LockOutlined />}
        onChange={(e) => {
          confirmPassword = e.target.value;
        }}
      />
      {verif && (
        <>
          {" "}
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          ></Space>
          <Alert
            message="Password and Confirm Password do not match Text"
            type="error"
          />
        </>
      )}

      <Button
        type="primary"
        onClick={() => {
          if (password !== confirmPassword) {
            setverif(!verif);
          } else {
            console.log(fullname, email, phone, password);
            add(fullname, email, password, phone);
          }
        }}
      >
        SingUp
      </Button>
    </div>
  );
}

export default SingUp;
