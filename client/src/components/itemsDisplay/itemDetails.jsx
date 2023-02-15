import React from "react";
function ItemDetailds({title,description,quantity,price,review_rev_id,gategorie,img,selectItem}){
    return(
        <>
        <h1 onClick={()=>selectItem({title,description,quantity})}>{title}</h1>
        <h1>{description}</h1>
        <img className="image" src={img} />
        <h1>{quantity}</h1>
        <h1>{price}</h1>
        <h1>{gategorie}</h1>
        </>
    )
}
export default ItemDetailds
