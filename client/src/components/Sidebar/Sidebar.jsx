import React, { useState } from "react";
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
// import { IoCarSportSharp } from 'react-icons/io';
import {FaCarSide} from 'react-icons/fa'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {BsPhoneFill} from 'react-icons/bs'
import {BiFootball} from 'react-icons/bi'
import {FaTshirt} from 'react-icons/fa'
function Sidebar ({filterCategories}){
    const [sideBar,setSideBar]=useState(false)
    const toggleSideBar=()=>{
        setSideBar((prevState)=>!prevState)
    }
    return(
      <div>
        <div>
<li onClick={()=>filterCategories('vehicles')}> <FaCarSide/> vehicles</li>
<li  onClick={()=>filterCategories('real estate')}><BsFillHouseDoorFill/> real estate</li>
<li onClick={()=>filterCategories('multimedia')}> <BsPhoneFill />multimedia</li>
<li onClick={()=>filterCategories('hobbies')}> <BiFootball/> hobbies</li>
<li onClick={()=>filterCategories('clothes')}> <FaTshirt/> clothes</li>
        </div>
        </div>
    )
}
export default Sidebar