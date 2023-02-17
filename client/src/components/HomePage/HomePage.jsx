import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx'
import Search from '../Search/Search.jsx'
import Items from '../itemsDisplay/items.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Slider from '../Slider/Slider.jsx'
import {Link} from 'react-router-dom'
function HomePage() {
        const [data,setData]=useState([])
  const [item,setItem]=useState({})
  useEffect(()=>{
    axios.get('http://localhost:3000/api/item')
    .then(res=>{
      setData(res.data)
    })
    .catch(error=>{
      throw error
    })
  },[])
  const filterCategories=(category)=>{
    const newItems=data.filter((item)=>(item.gategorie)===category)
    setData(newItems)
  }
  let filterItems = (namee)=>{
    const newItems= data.filter(item=>(item.title.toLowerCase()).includes(namee.toLowerCase()))
     setData(newItems)
   }
   
  return (
    <div>
    <Navbar  />
    <Search filterItems={filterItems} />
    <Slider data={data}  />
    <Sidebar filterCategories={filterCategories} />
      <Items data={data} />
      <Link to="/SignUp"><button onClick={()=>{

      }}>Click meeeeeeeeeeeeeeeeeeee</button></Link>
    </div>

    
  )
}

export default HomePage