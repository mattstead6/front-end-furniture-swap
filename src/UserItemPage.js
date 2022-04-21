import React from 'react'
import UserItems from './UserItems'
import './UserItemPage.css'
import { useNavigate } from "react-router-dom";

function UserItemPage({userItems, deleteItem}) {

  let navigate = useNavigate()


  const {bio, full_name, location, items, image} = userItems
  
  const mappedUserItems = items.map(item => {
    return <UserItems 
      key={item.id}
      item={item}
      deleteItem={deleteItem}
    />
  })

 
    return (
      <>
        <div className="homeButtonContainer">
          <button className="backToHomeButton" onClick={() => navigate("/")}> BACK TO HOME </button>
        </div>

        <div className="userInfo">
          <img img_src={image} alt={full_name}></img>
          <h1>{full_name}</h1>
          <h3>Location: {location}</h3>
          <h3>Bio: {bio}</h3>
        </div>
            
        <div className="useritemspagecontainer">
          {mappedUserItems}
        </div>





      </>

    )
}

export default UserItemPage
