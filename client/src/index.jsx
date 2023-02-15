import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Search from './components/Search/Search.jsx'
import Items from './components/itemsDisplay/items.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Slider from './components/Slider/Slider.jsx'
import data from './dummyData'
import SingUp from './components/SingUp/SingUp.jsx'
import Login from './components/Login/Login.jsx'

const App = () => {
  const [Data,setData]=useState(data)
   console.log(Data);
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/api/user/HomePage')
  //   .then(res=>{
  //     setData(res.data)
  //   })
  //   .catch(error=>{
  //     throw error
  //   })
  // },[])
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
    <Search filterItems={filterItems} />
    <Sidebar filterCategories={filterCategories} />
    <SingUp/>
      <Login/>
    <Items Data={Data} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
