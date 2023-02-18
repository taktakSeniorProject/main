import React from "react";
import ItemDetailds from "./itemDetails.jsx";
function Items ({data}){
    // console.log(Data);
    return(
        <div className="items">
        {data.map((item,index)=>{
return <ItemDetailds {...item} key={index} />
        })}
      
        </div>
    )
}
export default Items