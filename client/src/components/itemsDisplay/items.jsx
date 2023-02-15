import React from "react";
import ItemDetailds from "./itemDetails.jsx";

function Items ({Data,selectItem}){
    // console.log(Data);
    return(
        <>
        {Data.map((item,index)=>{
return <ItemDetailds selectItem={selectItem}  {...item} key={index} />
        })}
        </>
    )
}
export default Items