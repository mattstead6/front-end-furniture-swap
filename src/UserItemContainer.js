import React from 'react'
import './UserItemContainer.css'

function UserItemContainer({item}) {

  // const[image_url, item_name, description, original_pricing, condition] = item

  // function handleClick (e) {
  //   console.log(e.target.value)
  // }

  return (
    <>
    <div className="useritemcard">
      <img alt={item.name}src={item.image_url}/>
      <button className="deleteButton">Delete</button>
      <h3>{item.item_name}</h3>
      <p>Description: {item.description}</p>
      <p>Condition: {item.condition}/10</p>
      <p>Original Value:{item.original_pricing}</p>
    </div>
    
    </>

  )
}

export default UserItemContainer