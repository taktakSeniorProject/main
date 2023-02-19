import React from "react";
import ItemDetailds from "./itemDetails.jsx";
import { Space } from "antd";
function Items ({data}){
    // console.log(Data);
    return(

        <div className="items">
            
        {data.map((item,index)=>{
return <Space><ItemDetailds {...item} key={index} /></Space>
        })}
      
        </div>
    )
}
export default Items