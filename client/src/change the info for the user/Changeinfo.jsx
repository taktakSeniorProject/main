import React, { useEffect, useState } from "react";
import { Button, Input, Alert, Space } from "antd";
import {useLocation,Link,useNavigate } from 'react-router-dom'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
const bcrypt = require("bcryptjs");
import axios from "axios";
function Changeinfo() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
  const location=useLocation()
  console.log(location)
    const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      if (!username) {
        errors.username = "Username is required";
        isValid = false;
      }
  
  
      if (!phone) {
        errors.phone = "Phone number is required";
        isValid = false;
      } else if (!/^\d{8}$/.test(phone)) {
        errors.phone = "Phone number must be 8 digits";
        isValid = false;
      }
  
      setErrors(errors);
  
      return isValid;
    };
  
    const add = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/api/user/mofifyUser/${location.state.user.user_id}`, {
          username: username,
          phoneN: phone,
        });
        console.log(response);
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
            type="text"
            placeholder="Phone Number"
            prefix={<PhoneOutlined />}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <Alert message={errors.phone} type="error" />}
            <Space>
              <Link to="/">
            <Button type="primary" onClick={(e)=>{
              handleSubmit(e)
            }}>
            Change it
            </Button>
            </Link>
            </Space>
            </form>
            </div>
    )  
}

export default Changeinfo