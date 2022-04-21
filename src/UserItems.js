import React from 'react'
import './UserItems.css'

function UserItems({item, deleteItem}) {

  // const[image_url, item_name, description, original_pricing, condition] = item

  // function handleClick (e) {
  //   console.log(e.target.value)
  // }


  



  // function deleteItem (trashedItem) {
  //   fetch('${trashedItem.id}'), {
  //     method: "DELETE",
  //   } 
  //   setPlants(userItems.filter(item => item.id !== trasheditem.id))
  //   //then send  deleteItem down userITemPage
  // }

  return (
    <>
    <div className="useritemcard">
      <img alt={item.name}src={item.image_url}/>
      <button onClick={() => deleteItem(item)} className="deleteButton">Delete</button>
      <h3>{item.item_name}</h3>
      <p>Description: {item.description}</p>
      <p>Condition: {item.condition}/10</p>
      <p>Original Value:{item.original_pricing}</p>
    </div>
    
    </>

  )
}

export default UserItems