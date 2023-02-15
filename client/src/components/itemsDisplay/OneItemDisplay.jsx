import React, { useState } from "react";
import axios from "axios";
function OneItemDisplay({item}){
    const [comment,setComment]=useState('')
    const [rating,setRating]=useState(0)
    return(
        <>
        <h1>{item.title}</h1>
        <h2>{item.quantity}</h2>
        <h2>{item.description}</h2>
        <input placeholder="add comment" 
        type={'text'}
        />
        <input placeholder="add rating"
        type={'number'}
        />
        </>
    )
}
export default OneItemDisplay 