import React from "react";
import ItemDetailds from "./itemDetails.jsx";

function Items ({data,selectItem}){
    console.log(data);
    return(
        <>
        {data.map((item,index)=>{
return <ItemDetailds selectItem={selectItem}  {...item} key={index} />
        })}
        </>
    )
}
export default Items