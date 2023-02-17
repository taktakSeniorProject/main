import React, { useState } from 'react'
import { Button, Checkbox, Form, Input , Alert, Space  } from 'antd';
import axios from 'axios';
const bcrypt=require("bcryptjs");
function Login() {
  const [test, settest] = useState(false)
  const [emailTest, setemail] = useState(true)
  const [passwordTest, setpassword] = useState(true)
  let password=""
  let email=""
  const verif=(email, password)=>{
    console.log(localStorage.getItem('access_token'))
    axios.get(`http://localhost:3000/api/user/getUser`,{headers:{"authorization":`Bearer ${localStorage.getItem('access_token')}`}}).then((res)=>{
      console.log(res)

      if(res.data.length===0 || !bcrypt.compare(password, res.data.password)){
        alert('Please enter')
        settest(!test)
        
      }else{
        alert('msg');
        localStorage.setItem('user', JSON.stringify(res.data))
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
      <Input onChange={(e)=>{
        email=e.target.value
        // if(email.indexOf("@")!==-1 && email.indexOf("gmail.com")!==-1){
        //   setemail(false)

        // }
        // else{
        //   setemail(true)
        // }
      }} />
      {emailTest && <>
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        ></Space>
        <Alert
          message="email are invalid"
          type="error"
        />
    </>
      }
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
      <Input.Password  onChange={(e)=>{
        password=e.target.value
        // if(password.length>4){
        //   setpassword(false)
        // }else{
        //   setpassword(true)
        // } 
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
    >
      {passwordTest && <>
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        ></Space>
        <Alert
          message="password is to  short"
          type="error"
        />
    </>
      }
       {test && <>
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
        console.log(email,password)
        verif(email,password)
        console.log()
      }}>
        Submit
      </Button>
     
    </Form.Item>
  </Form></div>
  )
}

export default Login