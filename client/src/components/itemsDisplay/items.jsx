import React from "react";
import ItemDetailds from "./itemDetails.jsx";

function Items ({data}){
    console.log(data);
    return(
        <>
        {data.map((item,index)=>{
return <ItemDetailds {...item} key={index} />
        })}
        </>
    )
}
export default Items