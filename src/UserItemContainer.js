import React from 'react'
import './UserItemContainer.css'

function UserItemContainer({item}) {

  return (
    <div className="useritemscontainer">
      <img alt="Item Images"src={item.image_url}/>
    </div>
  )
}

export default UserItemContainer