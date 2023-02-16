import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Search from '../Search/Search.jsx'
import Items from '../itemsDisplay/items.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Slider from '../Slider/Slider.jsx'
import data from '../../dummyData'
function HomePage() {
  
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
    </div>

    
  )
}

export default HomePage