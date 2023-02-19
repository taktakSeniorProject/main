import { Link,useNavigate } from "react-router-dom";
import React from "react";
function ItemDetails({ title, description, quantity, price, category, img,id }) {
    const navigate=useNavigate()
    return (
      <div className="product-box">
        <img  className="product-img" src={img} alt={title} />
        <h1 className="product-title"  onClick={()=>{
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
        {/* <h1>{description}</h1> */}
        
        <h5 className="price">{price}</h5>
        <h1>{category}</h1>
      </div>
    )
  }
  export default ItemDetails;