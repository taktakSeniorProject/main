import React, { useEffect, useState } from "react";
import { Button, Input, Alert, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const bcrypt = require("bcryptjs");
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{8}$/.test(phone)) {
      errors.phone = "Phone number must be 8 digits";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const add = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/addUser", {
        username: username,
        email: email,
        password: bcrypt.hashSync(password),
        phoneN: phone,
      });
      console.log(response);
      localStorage.clear();
      localStorage.setItem("access_token", response.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      add();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <Alert message={errors.username} type="error" />}
        <Input
          type="email"
          placeholder="Email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <Alert message={errors.email} type="error" />}
        <Input
          type="text"
          placeholder="Phone Number"
          prefix={<PhoneOutlined />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <Alert message={errors.phone} type="error" />}
        <Input
          type="password"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Alert message={errors.password} type="error" />}
        <Input
          type="password"
          placeholder={<LockOutlined />}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
          <Alert message={errors.confirmPassword} type="error" />
          )}
          <Space>
            <Link to="/Login">
          <Button type="primary" htmlType="submit" onClick={(e)=>{
            handleSubmit(e)
          }}>
          Sign up
          </Button>
          </Link>
          <Link to="/Login">Already have an account? Sign in</Link>
          </Space>
          </form>
          </div>
          );
          }
          
          export default SignUp;
