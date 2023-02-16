import React, { useState } from "react";
import axios from "axios";
function OneItemDisplay({item}){
    const [comment,setComment]=useState('')
    const [rating,setRating]=useState(0)
    const hanbdlePostComment=(id)=>{
        axios.post(`http://localhost:3000/api/review/comment/${id}`),{
            comment:comment
        }
    }
    const hanbdlePostRating=()=>{
        axios.post(`http://localhost:3000/api/review/rating/${id}`),{
            rating:rating
        }
    }
    return(
        <>
        <h1>{item.title}</h1>
        <h2>{item.quantity}</h2>
        <h2>{item.description}</h2>
        <input placeholder="add comment" 
        type={'text'}
        onChange={(e)=>setComment(e.target.value)}
         />
         <button onClick={()=>hanbdlePostComment(item.id)}>comment</button>
        <input placeholder="add rating"
        type={'number'}
        onChange={(e)=>setRating(e.target.value)}
        />
        <button onClick={()=>hanbdlePostRating(item.id)}>rating</button>
        </>
    )
}
export default OneItemDisplay 