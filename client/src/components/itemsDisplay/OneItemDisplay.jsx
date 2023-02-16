import React, { useState } from "react";
import axios from "axios";
function OneItemDisplay({item}){
    const [comment,setComment]=useState('')
    const [revRating,setRating]=useState(0)
    const hanbdlePostComment=(id)=>{
        axios.post(`localhost:3000/api/reviews/review/${id}`),{
            comment:comment,
            revRating:revRating
        }
    }
    const handleGetComments=()=>{
        axios.get(`localhost:3000/api/reviews/comment/${id}`)
    }
    const handleGet=()=>{
        axios.get(`localhost:3000/api/reviews/rating/${id}`)
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
