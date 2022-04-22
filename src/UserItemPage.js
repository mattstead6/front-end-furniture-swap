import React, { useState } from 'react'
import UserItems from './UserItems'
import './UserItemPage.css'
import { useNavigate } from "react-router-dom";
import Form from './Form';
import UserProfileModal from './UserProfileModal';
import './UserProfileModal.css'

function UserItemPage({userItems, deleteItem, items1, setItems, addItem}) {

  let navigate = useNavigate()

  const {bio, full_name, location, items, image} = userItems

  const [showEditForm, setShowEditForm] = useState("false")

  function handleUserInfoEditClick () {
    setShowEditForm((showEditForm) => !showEditForm)
  }
  
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

        {showEditForm? <UserProfileModal userItems={userItems}/> : null}

        <div className="userInfo">
          <img className="userImage" src={image} alt={full_name}></img>
          <h1>{full_name}</h1>
          <h3>Location: {location}</h3>
          <h3>Bio: {bio}</h3>
          <button onClick={handleUserInfoEditClick}>Edit</button>
        </div>
            
        <div className="useritemspagecontainer">
          {mappedUserItems}
        </div>


<Form items={items1} setItems={setItems} addItem={addItem} />


      </>

    )
}

export default UserItemPage
