import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Search from './components/Search/Search.jsx'
import Items from './components/itemsDisplay/items.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Slider from './components/Slider/Slider.jsx'
import data from './dummyData'
import SingUp from './components/SingUp/SingUp.jsx'
import Login from './components/Login/Login.jsx'
import OneItemDisplay from './components/itemsDisplay/OneItemDisplay.jsx'
const App = () => {
  const [Data,setData]=useState(data)
  const [view,setView]=useState('home')
  const [item,setItem]=useState({})
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
   const selectItem=(item)=>{
    setItem(item)
    setView('oneItem')
  }
  return (
     
    <div>
    <Navbar  />
    <Search filterItems={filterItems} />
    <Slider data={data}  />
    <Sidebar filterCategories={filterCategories} />
      {view ==='home' &&  <Items selectItem={selectItem} Data={Data} />}
      {view ==='oneItem' && <OneItemDisplay item={item} />}
    <SingUp/>
      <Login/>
    </div>
    
    
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
