import React from "react";
import ItemDetailds from "./itemDetails.jsx";
import { Space } from "antd";
function Items ({theUser,data}){
     console.log(theUser);
    return(

        <div className="items">
            
        {data.map((item,index)=>{
            // console.log(item)
return <Space><ItemDetailds   {...item} key={index} /></Space>
        })}
      
        </div>
    )
}
export default Items