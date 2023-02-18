import React,{useState,useEffect,} from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Search from '../Search/Search.jsx'
import Items from '../itemsDisplay/items.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Slider from '../Slider/Slider.jsx'
<<<<<<< HEAD

import axios from 'axios'
import PriceFilter from './PriceFlter.jsx'

=======
import data from '../../dummyData'
import axios from 'axios'
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
import { Link,useNavigate } from 'react-router-dom'
function HomePage() {
  const [data,setData]=useState([])
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const[theUser,setTheUser]=useState([])
  // const [view,setView]=useState('home')
  // const [item,setItem]=useState({})
  useEffect(()=>{
    if(localStorage.length>1){
    let email=JSON.parse(localStorage.user)
    axios.get(`http://localhost:3000/api/user/getUserId/${email.email}`)
    .then(res=>{
      console.log(res.data)
      setTheUser(res.data)
    })
    .catch(error=>{
      throw error
    })
  }
  else {
    <Link to='/Login'></Link>
  }
  },[])
  const navigate=useNavigate()
  
<<<<<<< HEAD
  useEffect(()=>{
    axios.get('http://localhost:3000/api/item')
    .then(res=>{
      setData(res.data)
=======
  const [Data,setData]=useState(data)
  const [view,setView]=useState('home')
  const [item,setItem]=useState({})
  const[theUser,setTheUser]=useState([])
  useEffect(()=>{
    if(localStorage.length>1){
    let email=JSON.parse(localStorage.user)
    axios.get(`http://localhost:3000/api/user/getUserId/${email.email}`)
    .then(res=>{
      console.log(res.data)
      setTheUser(res.data)
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
    })
    .catch(error=>{
      throw error
    })
<<<<<<< HEAD
  },[])
=======
  }
  else {
    <Link to='/Login'></Link>
  }
  },[])
  const navigate=useNavigate()
  
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
  const filterCategories=(category)=>{
    const newItems=data.filter((item)=>(item.gategorie)===category)
    setData(newItems)
  }
  
  const filterItems = (namee) => {
    const newItems = data.filter(
      (item) =>
        item.title.toLowerCase().includes(namee.toLowerCase()) &&
        (minPrice === 0 || item.price >= minPrice) &&
        (maxPrice === 1000 || item.price <= maxPrice)
    );
    setData(newItems);
  };
 
  return (
     
    <div>
     <Slider data={data} />
    <Navbar  />
    <Search filterItems={filterItems} />
    <Sidebar filterCategories={filterCategories} />
<<<<<<< HEAD
     <Items  data={data}/>
    {/* <OneItemDisplay item={item} /> */}
=======
      {view ==='home' &&  <Items selectItem={selectItem} Data={Data} />}
      {view ==='oneItem' && <OneItemDisplay item={item} />}
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
      <button onClick={()=>{
navigate("/ImgUpload",{
  state:{
    theUser:theUser,
  }
  
      })}}>update my img</button>
<<<<<<< HEAD
 <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onApplyFilter={() => {
          filterItems('');
        }}/>
=======
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
    </div>
    

    
  )
}

export default HomePage