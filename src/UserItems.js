import React from 'react'
import './UserItems.css'

function UserItems({item, deleteItem}) {

  return (
    <>
    <div className="useritemcard">

        <img className="userItemImage" alt={item.name}src={item.image_url}/>

      <div className="usersItemDetails">
        <h3>{item.item_name}</h3>
        <p>Description: {item.description}</p>
        <p>Condition: {item.condition}/10</p>
        <p>Original Value:{item.original_pricing}</p>
      </div>

      <div className="btnContainer">
        <button onClick={() => deleteItem(item)} className="deleteButton">Delete</button>

        <button onClick={() => deleteItem(item)} className="deleteButton">Edit</button>
      </div>
      

    </div>
    
    </>

  )
}

export default UserItems