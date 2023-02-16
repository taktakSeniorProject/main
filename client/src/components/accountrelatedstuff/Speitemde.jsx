import React from "react";

const Speitemde=({title,description,price,gategorie,img})=>{
    return(
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
            <h5>{gategorie}</h5>
            <h5>{price}</h5>
            <img src={img} />
        </div>
    )
}




export default Speitemde