import React, {useState, useEffect} from 'react'
import './RequestPage.css'
import TradeImages from './TradeImages'


function RequestPage({userItems, showClickedItem}) {

    const [userInfo, setUserInfo] = useState({})
    // const [tradeableItems, setTradeableItems] = useState({})

    const {bio, full_name, location, items} = userItems

  


console.log(items)

   const mappedItems = items.map(item => {
        return <TradeImages 
            key={item.id}
            item={item}
        />
    })

    useEffect( () => {
        fetch(`http://localhost:9292/users/${showClickedItem.user_id}`)
        .then(res => res.json())
        .then(userData => setUserInfo(userData))
    },[])



    return (
        <>
        You are swapping with  
         <div className='card'>
                <h2 className='title'>{userInfo.full_name}</h2>
                <h3>{userInfo.location}</h3>
                <img className="userImage" src={userInfo.image} alt='idasdkfj'/>
                <p>Bio: {userInfo.bio}</p>
        </div>
    <p>{showClickedItem.item_name}</p>
    <p>Condition: {showClickedItem.condition}/10</p>
    <p>Description: {showClickedItem.description}</p>
    <p>Original Price: ${showClickedItem.original_pricing}</p>

    <img className="selected-item"src={showClickedItem.image_url} alt="something"/>
    <button className='request-bton'>REQUEST SWAP</button>
<h1>Please select an item you would like to swap with {userInfo.full_name}</h1>


    {mappedItems}
  

      <h2>{full_name}</h2>
      <h3>{location}</h3>
      <img className="userImage" src='/images/kristin-image.jpg' alt = "animjage"/>
      <p>Bio: {bio}</p>


      </>
    )
}

export default RequestPage;