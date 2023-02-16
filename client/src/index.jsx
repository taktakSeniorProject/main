import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Search from './components/Search/Search.jsx'
import Items from './components/itemsDisplay/items.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import SingUp from './components/SingUp/SingUp.jsx'
import Login from './components/Login/Login.jsx'
import Slider from './components/Slider/Slider.jsx'


const App = () => {
  const [data,setData]=useState([])
  console.log(data);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/item')
    .then(res=>{
      console.log(res.data);
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
    {data && <Slider data={data}  />} 
    <Search filterItems={filterItems} />
    <Sidebar filterCategories={filterCategories} />
    <SingUp/>
      <Login/>
    <Items data={data} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))