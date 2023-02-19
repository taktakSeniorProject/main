
import React, { useEffect, useState } from 'react';
import {useLocation,Link,useNavigate,useParams } from 'react-router-dom'
import { Button, Input, Alert, Space } from "antd";
import axios from 'axios';
import AllItemsForUser from './AllItemsForUser.jsx';
function ImagesUplead() {
    let array=[]
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [gategorie, setGategorie] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState([])
   let {id}=useParams()
   console.log(id)
    const [selectedFiles, setSelectedFiles] = useState([]);
console.log(selectedFiles)
  const handleSelectedFiles = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formDataArray = Array.from(selectedFiles).map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'clzrszf3');
      return formData;
    });
  
    const requests = formDataArray.map((formData) => {
      return axios.post('https://api.cloudinary.com/v1_1/dp54rkywx/image/upload', formData);
    });
  
    axios.all(requests)
      .then((results) => {
        (results.map((result) =>{console.log("mmmmmmmmmmm",result.data)
            
        array.push(result.data.secure_url)}));
        // Do something with the array of uploaded image URLs
      }).then((results) =>{
        console.log(JSON.stringify(array) );
        axios.post(`http://localhost:3000/api/item/addItem/${id}`,{
            title:title,
            description:description,
            price:price,
            gategorie:gategorie,
            img:JSON.stringify(array),
            user_id:34
        }).then((res)=>{
            console.log(res)
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div>
         <h2 >Add an item :</h2>
            <input type='text' 
            onChange={(e)=>setTitle(e.target.value)
            }
            placeholder='title'
            value={title} />

            <input type='text' 
            onChange={(e)=>setDescription(e.target.value)
            }
            placeholder='description'
            value={description}/>

            <input type='text' 
            onChange={(e)=>setGategorie(e.target.value)
            }
            placeholder='gategorie'
            value={gategorie} />
             <input type='number' 
            onChange={(e)=>setPrice(e.target.value)
            }
            placeholder='price'
            value={price} />

        <Button onClick={(e)=>{
            handleSubmit(e)
        }}>add an item </Button>
        <input type="file" name="files[]" multiple onChange={(e)=>{
            handleSelectedFiles(e)
        }}/>
    </div>
  )
}

export default ImagesUplead