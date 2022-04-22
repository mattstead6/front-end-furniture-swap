import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './RequestPage.css'
import TradeImages from './TradeImages'
// import ConfirmModal from './ConfirmModal';


function RequestPage({userItems, showClickedItem, setCart, cart, handleRequest, requestClicked}) {

    const [userInfo, setUserInfo] = useState({})
    const [money, setMoney] = useState(0)

   
    // const [tradeableItems, setTradeableItems] = useState({})

    const {bio, full_name, location, items, image} = userItems

  
    let navigate = useNavigate()


   

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

    // function handleRequest(){
    //     // <ConfirmModal showClickedItem={showClickedItem} userItems={userItems}/>
    //     console.log(items)
    // }



    return (
        <>

        <div className='home-button-container'>
            <button onClick={() => navigate("/")} className='home-button'>Back To Home</button>
        </div>
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
            <div className='cart-section'>
                <h3>Select Item Below</h3>
                <img className='traded-item' src={showClickedItem.image_url} alt='asdfsdf'/>
                <img className='traded-item' src={'https://media2.giphy.com/media/OlYhrN7KKv7JIekBPd/giphy.gif?cid=790b7611f9eb79aee3c3ba922435f5d07a6fb987f5d03128&rid=giphy.gif&ct=s'} alt='asdfsdf'/>
                {cart.id? <img class='traded-item'src={cart.image_url} alt=''/> :
                null}
                <div >
               
            </div>
                <div className='swap'>
                <p>If you wish to offer $ on top of the swap, enter here</p>
                <label>$
                    <input onChange={(e) => setMoney(e.target.value)}></input>
            </label>
                <h3>Press REQUEST SWAP to offer {userInfo.full_name} a swap</h3>
                </div>
          
               
                {/* <h4>If you wish to offer $ on top of the swap, press here</h4>
                <button>OFFER $</button> */}
            </div>
           
                        <div className='card'>
                                <h3>Profile: {full_name}</h3>
                                <img className="userImage" src={image} alt = "animjage"/>
                                <h2 className='title'>{full_name}</h2>
                                <h3>{location}</h3> 
                                <p>Bio: {bio}</p>
                        </div>
                        
    </div>
 

    <button onClick={() => handleRequest(showClickedItem, cart)} className='request-bton'>REQUEST SWAP</button>
<h1>Please select an item you would like to swap with {userInfo.full_name}</h1>


    {mappedItems}



      </>
    )
}

export default RequestPage;