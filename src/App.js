import React, {useEffect, useState} from 'react';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RequestPage from './RequestPage';
import UserItemPage from './UserItemPage';
// import ConfirmModal from './ConfirmModal';

function App() {

  const [userItems, setUserItems] = useState({})
  const [showClickedItem, setShowClickedItem] = useState({})
  const [items, setItems] = useState([])
  const [cart, setCart] = useState('')
  const [spin, setSpin] = useState('')
  const [money, setMoney] = useState(0)
  // const [requestClicked, setRequestClicked] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/items')
        .then(res => res.json())
        .then(items => setItems(items))
}, [])

// console.log(cart)

function addItem(newestItem) {
    setItems([...items, newestItem])
    setUserItems({...userItems, items: [...userItems.items, newestItem]})
    // console.log(newestItem)    
}

function handleRequest (item1, item2) {

  // <ConfirmModal cart = {cart} showClickedItem={showClickedItem} />

alert(`You successfully swap't your item, good for you. You owe $${money}`)

  fetch(`http://localhost:9292/item/swap/${item1.id}/${item2.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  })
 .then(resp => resp.json())
 .then(() => {  
  setItems(items.map(item => {

    if(item.id === item1.id) {
      return {...item, user_id: item2.user_id}
    }
    else if(item.id === item2.id){
      return {...item, user_id: item1.user_id}
    }
    else {
      return item
    }
  }))

  setUserItems({...userItems, items: userItems.items.map( item => {
    if(item.id === item1.id) {
      return item2
    }
    else {
      return item
    }
  })
})
})
}


      useEffect(() => {
      fetch('http://localhost:9292/users')
          .then(res => res.json())
          .then(data => setUserItems(data))
  }, [userItems])


  function deleteItem(deletedItem) {
    fetch(`http://localhost:9292/itemdelete/${deletedItem.id}`, {
      method: "DELETE",
    })
    setUserItems({...userItems, items: userItems.items.filter(item => item.id !== deletedItem.id)})
  }
  console.log(userItems)

  return (
    <>

    <div className="logocontainer">
    <h1> <img className="logoimage" src="https://cdn-dmppo.nitrocdn.com/MQtLRDiaOJqaiAMiKiWzfYWFElqSrNJq/assets/static/optimized/rev-084e1d7/wp-content/uploads/2020/11/HCT_FoodSwapIcon.png"></img>SWAP'T</h1>
    </div>


    <Router>
    <Routes>
      <Route path='/' element={<Home showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem} items={items}/>}/>
      <Route exact path="/request" element={<RequestPage spin={spin} setSpin={setSpin} setMoney={setMoney} handleRequest={handleRequest} cart={cart} setCart={setCart} userItems={userItems} showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem}/>}/>
      <Route exact path ="useritempage" element={<UserItemPage userItems={userItems} deleteItem={deleteItem} items={items} setItems={setItems} addItem={addItem}/>}/>
    
    </Routes>
    </Router>

    </>
  )
}

export default App;

