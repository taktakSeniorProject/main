import React, { useState } from "react";
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
function Sidebar ({filterCategories}){
    const [sideBar,setSideBar]=useState(false)
    const toggleSideBar=()=>{
        setSideBar((prevState)=>!prevState)
    }
    return(
        <div className="sidebarIcon" >
        <BsReverseLayoutTextSidebarReverse onClick={()=>toggleSideBar()}/>
        <div className={sideBar?"sideBar sideBar-open":"sideBar" }>
<li onClick={()=>filterCategories('mecanic')}>mecanic</li>
<li  onClick={()=>filterCategories('kids')}>kids</li>
<li onClick={()=>filterCategories('love')}>love</li>
<li onClick={()=>filterCategories('test')}>test</li>
<li onClick={()=>filterCategories('wallah test')}>wallah test</li>
        </div>
        </div>
    )
}
export default Sidebar