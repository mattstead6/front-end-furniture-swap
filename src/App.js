import React, {useEffect, useState} from 'react';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RequestPage from './RequestPage';
import UserItemPage from './UserItemPage';



function App() {

  const [userItems, setUserItems] = useState({})
  const [showClickedItem, setShowClickedItem] = useState({})


  console.log(showClickedItem)

      useEffect(() => {
      fetch('http://localhost:9292/users')
          .then(res => res.json())
          .then(data => setUserItems(data))
  }, [])


  function deleteItem(deletedItem) {
    fetch(`http://localhost:9292/itemdelete/${deletedItem.id}`, {
      method: "DELETE",
    })
    setUserItems({...userItems, items: userItems.items.filter(item => item.id !== deletedItem.id)})
  }


  return (
    <>

    <div className="logocontainer">
    <h1> <img className="logoimage" src="https://cdn-dmppo.nitrocdn.com/MQtLRDiaOJqaiAMiKiWzfYWFElqSrNJq/assets/static/optimized/rev-084e1d7/wp-content/uploads/2020/11/HCT_FoodSwapIcon.png"></img>SWAP'T</h1>
    </div>




    
    <Router>
    <Routes>
      <Route path='/' element={<Home showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem}/>}/>
      <Route exact path="/request" element={<RequestPage userItems={userItems} showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem}/>}/>
      <Route exact path ="useritempage" element={<UserItemPage userItems={userItems} deleteItem={deleteItem}/>}/>
    
    </Routes>
    </Router>

    </>
  )
}

export default App;

