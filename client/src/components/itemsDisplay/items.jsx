import React from "react";
import ItemDetailds from "./itemDetails.jsx";
function Items ({Data}){
    // console.log(Data);
    return(
        <>
        {Data.map((item,index)=>{
return <ItemDetailds {...item} key={index} />
        })}
      
        </>
    )
}
export default Items