import { Link,useNavigate } from "react-router-dom";
import React from "react";
function ItemDetails({ title, description, quantity, price, category, img,id }) {
    const navigate=useNavigate()
    console.log(img,'from item details')
    return (
      <>
        <h1 onClick={()=>{
            navigate(`/items/${id}`,{
                state:{
                    title:title,
                    description:description,
                    quantity:quantity,
                    price:price,
                    category:category,
                    img:img,
                    id:id
                }
            })
        }}>{title}</h1>
        <h1>{description}</h1>
        <img className="image" src={img} alt={title} />
        <h1>{quantity}</h1>
        <h1>{price}</h1>
        <h1>{category}</h1>
      </>
    )
  }
  
  export default ItemDetails;