import React, { useState } from 'react'
import { Button, Checkbox, Form, Input , Alert, Space  } from 'antd';
import axios from 'axios';
const bcrypt=require("bcryptjs");
function Login() {
  const [test, settest] = useState(false)
  let password=""
  let email=""
  const verif=(email, password)=>{
    axios.get(`http://localhost:3000/api/user/getUser/${email}`).then((res)=>{
      console.log(res.data)

      if(res.data.length===0 || !bcrypt.compare(password, res.data[0].password)){
        settest(!test)
        
      }else{
        alert('msg');
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data[0]))
        window.location.href = '/'
      }
    })
  }
      return (
    <div><Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input id='email' onChange={(e)=>{
        email=e.target.value
      }} />
      <span id='error1'></span>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password id='password' onChange={(e)=>{
        password=e.target.value 
      }}/>
      <span id='error2'></span>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    > {test && <>
      <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        ></Space>
        <Alert
          message="Password and email are invalid"
          type="error"
        />
    </>}
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary"  onClick={(e)=>{
        e.preventDefault()
        verif(email,password)

      }}>
        Submit
      </Button>
     
    </Form.Item>
  </Form></div>
  )
}

export default Login