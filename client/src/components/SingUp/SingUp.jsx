import React from 'react'
import { Button, Input } from 'antd';
import {UserOutlined,MailOutlined ,PhoneOutlined,LockOutlined} from '@ant-design/icons'
import axios from 'axios';
function SingUp() {
    
    let fullname=""
    let email=""
    let phone=""
    let password=""
    let confirmPassword=""
    const add=(fullname,email,phone,password)=>{
      try {
        axios.post("http://localhost:3000/api/user/addUser",{username:fullname,
        email:email,password:password,phoneN:phone}).then(response=>console.log(response))
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
 
   <Input type="text" placeholder='Full Name' prefix={<UserOutlined/>} onChange={(e,)=>{
    fullname=e.target.value;
   }}/>
   <Input type="text" placeholder='Email' prefix={<MailOutlined />} onChange={(e)=>{
    email=e.target.value;
   }} />
   <Input type="text" placeholder='Phone Number'prefix={<PhoneOutlined />} onChange={(e)=>{
    phone=e.target.value;
   }} />
   <Input type="password" placeholder='Password' prefix={<LockOutlined />} onChange={(e)=>{
    password=e.target.value;
   }} />
   <Input type="password" placeholder='Confirm Password' prefix={<LockOutlined />} onChange={(e)=>{
    confirmPassword=e.target.value;
   }} />
   <Button type='primary' onClick={()=>{
    if(password!==confirmPassword){
        console.log(fullname,email,password,phone)
        alert("Password and Confirm Password do not match")
    }else{
        console.log(fullname,email,phone,password)
        add(fullname,email,password,phone)
    }
   }}>SingUp</Button>
  </div>

  )
}

export default SingUp;