import { Link,useNavigate } from "react-router-dom";
import React, { useState } from "react";
function ItemDetails({ title, description, quantity, price, gategorie, img,id,user_user_id }) {
  // const [user,setUser]=useState(theUser[0].user_id)
  //  console.log(user);

    const navigate=useNavigate()
    return (
      <div className="product-box">
        <h1 className="product-title"  onClick={()=>{
            navigate(`/items/${id}/${user_user_id}`,{
                state:{
                    title:title,
                    description:description,
                    quantity:quantity,
                    price:price,
                    category:category,
                    img:img,
                    id:id,
                    user_id: user_user_id 
                }
            })
        }}>{title}</h1>
        <img  className="product-img" src={img[0]} alt={title} />
        <h2 className='item-card__price'>
      <span className="item-card__price--old">${price}</span>
      <span className="item-card__price--new">${( price * 0.8).toFixed(2)}</span>
    </h2>
        <h5>{gategorie}</h5>
      </div>
    )
  }
  export default ItemDetails;