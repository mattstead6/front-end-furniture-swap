import React, {useState, useEffect} from 'react'
import './RequestPage.css'
import TradeImages from './TradeImages'


function RequestPage({userItems, showClickedItem}) {

    const [userInfo, setUserInfo] = useState({})
    const [cart, setCart] = useState('')
    // const [tradeableItems, setTradeableItems] = useState({})

    const {bio, full_name, location, items} = userItems

  


console.log(items)

   const mappedItems = items.map(item => {
        return <TradeImages 
            key={item.id}
            item={item}
            setCart={setCart}
        />
    })

    useEffect( () => {
        fetch(`http://localhost:9292/users/${showClickedItem.user_id}`)
        .then(res => res.json())
        .then(userData => setUserInfo(userData))
    },[])



    return (
        <>

        <div className='product-card'>
            <p className='item-name'>{showClickedItem.item_name}</p>
            <div className='details'>
            <p>Condition: {showClickedItem.condition}/10</p>
            <p>Description: {showClickedItem.description}</p>
            </div>
            <p className='price'>Original Price: ${showClickedItem.original_pricing}</p>
            <img className="selected-item"src={showClickedItem.image_url} alt="something"/>
        </div>
        
    <div className='card-container'>
            <div className='card'>
                <h3>Swap with {userInfo.full_name}</h3>
                <img className="userImage" src={userInfo.image} alt='idasdkfj'/>
                <h2 className='title'>{userInfo.full_name}</h2>
                <h3>{userInfo.location}</h3>
                <p>Bio: {userInfo.bio}</p>
            </div>
            <div>
                <img class='traded-item'src={cart} alt='iasdf'/>
            </div>
                        <div className='card'>
                                <h3>Profile: {full_name}</h3>
                                <img className="userImage" src='/images/kristin-image.jpg' alt = "animjage"/>
                                <h2 className='title'>{full_name}</h2>
                                <h3>{location}</h3> 
                                <p>Bio: {bio}</p>
                        </div>
    </div>

        

    <button className='request-bton'>REQUEST SWAP</button>
<h1>Please select an item you would like to swap with {userInfo.full_name}</h1>


    {mappedItems}


      </>
    )
}

export default RequestPage;