import React, {useState, useEffect} from 'react'
import './RequestPage.css'


function RequestPage({userItems, showClickedItem}) {

// console.log(showClickedItem.user_id)

    const {bio, full_name, location, items} = userItems

    // const mappedItems = items.map(item => console.log(item))
// const mappedItems = items.map(item => console.log(item))

    // useEffect( () => {
    //     fetch(`http://localhost:9292/users/${showClickedItem.user_id}`)
    //     .then(res => res.json())
    //     .then(userData => {
    //          condition: 
    //          description:
    //          image_url:
    //          item_name:
    //          original_pricing:
    //     })
    // },[])

    return (
        <>
      <h2>{full_name}</h2>
      <h3>{location}</h3>
      <img className="userImage" src='/images/kristin-image.jpg' alt = "animjage"/>
      <p>Bio: {bio}</p>

      </>
    )
}

export default RequestPage;