import React from 'react'
import UserItemContainer from './UserItemContainer'
import './UserItemPage.css'
import { useNavigate } from "react-router-dom";

function UserItemPage({userItems}) {

  let navigate = useNavigate()

  // console.log(userItems)
  const {bio, full_name, location, items, image} = userItems
  
  const mappedUserItems = items.map(item => {
    return <UserItemContainer 
      key={item.id}
      item={item}
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
