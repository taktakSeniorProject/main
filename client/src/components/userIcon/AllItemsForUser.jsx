import React from 'react'

function AllItemsForUser({item}) {
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmm",item);
  return (
    <div className=''>
      {item.img.map((e)=>{
        return <img className='picforuser' key={e.id} src={e} alt={e.name} />
      })}
               <h1>{item.title}</h1>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
    </div>
  )
}

export default AllItemsForUser