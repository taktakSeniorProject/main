import React from "react";
import ItemDetailds from "./itemDetails.jsx";
function Items ({Data}){
    // console.log(Data);
    return(
        <div className="items">
        {Data.map((item,index)=>{
return <ItemDetailds {...item} key={index} />
        })}
      
        </div>
    )
}
export default Items