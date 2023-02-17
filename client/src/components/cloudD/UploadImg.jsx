import React, { useState } from 'react'
import axios from 'axios'
function UploadImg() {
    const [imageUpload, setimageUpload] = useState("")
    const UploadImg=()=>{
        const formData = new FormData()
        formData.append('file', imageUpload)
        formData.append('upload_preset',"clzrszf3")
        axios.post('https://api.cloudinary.com/v1_1/dp54rkywx/image/upload',formData).then((response)=>{
            console.log()
            console.log(response.data.etag)
            let imgurl=((response.data).etag)
            axios.put(`http://localhost:3000/api/user/updateUser/${(JSON.parse(localStorage.user)).user_id}`,{
                
                profile:imgurl
            }).then((response)=>{
                console.log(response)
            })
        })
}
  return (
    <div><input type="file" onChange={(e)=>{
        setimageUpload(e.target.files[0])
    
    }} />
    <button onClick={UploadImg}>Submite</button></div>

  )
}


export default UploadImg