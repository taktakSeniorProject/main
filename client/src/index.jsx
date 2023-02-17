import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
// const App = () => {
//   const [Data,setData]=useState(data)
//    console.log(Data);
//   // useEffect(()=>{
//   //   axios.get('http://localhost:3000/api/user/HomePage')
//   //   .then(res=>{
//   //     setData(res.data)
//   //   })
//   //   .catch(error=>{
//   //     throw error
//   //   })
//   // },[])
//   const filterCategories=(category)=>{
//     const newItems=data.filter((item)=>(item.gategorie)===category)
//     setData(newItems)
//   }
//   let filterItems = (namee)=>{
//     const newItems= data.filter(item=>(item.title.toLowerCase()).includes(namee.toLowerCase()))
//      setData(newItems)
//    }
//   return (
//     <div>
//     <Navbar  />
//     <Search filterItems={filterItems} />
//     <Slider data={data}  />
//     <Search filterItems={filterItems} />
//     <Sidebar filterCategories={filterCategories} />
//     <SingUp/>
//       <Login/>
//     <Items Data={Data} />
//     <UploadImg/>
//     </div>
//   )
// }
import SignUp from './components/SingUp/SingUp.jsx'
import Login from './components/Login/Login.jsx'
const router=createHashRouter([{
  path:'/',
  element:<HomePage/>
  },
  { 
    path:"/SignUp",
    element:<SignUp/>
},
{
  path:"/Login",
  element:<Login/>
}
])
ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('app'))
