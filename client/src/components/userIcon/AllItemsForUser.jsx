import React from 'react'

function AllItemsForUser({item}) {
    console.log(item);
  return (
    <div>
        <img className='itemImages' src={item.img} alt="" />
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
    </div>
  )
}

export default AllItemsForUser