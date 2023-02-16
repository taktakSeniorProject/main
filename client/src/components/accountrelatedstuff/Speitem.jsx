import React,{ useEffect, useState } from "react";
import Speitemde from "./Speitemde.jsx";
import axios from "axios";

const Speitem=({user_id})=>{
    const [data,setData]=useState([])
    
   useEffect(()=>{
     axios.get(`http://localhost:3000/api/user/itemofuser/${user_id}`)
     .then(res=>{
       setData(res.data)
     })
     .catch(error=>{
       throw error
     })
  },[])
  
  return (
    <div>
        {data.map((e,index)=>{
  return <Speitemde {...e} key={index} />
})}
    </div>
  )
  

}




export default Speitem