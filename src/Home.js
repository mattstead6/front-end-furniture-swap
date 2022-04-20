import Form from "./Form"
import React, { useEffect, useState } from 'react'
import ItemsContainer from './ItemsContainer'
import RequestPage from "./RequestPage"
import UserItemPage from "./UserItemPage"
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate()

    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/items')
            .then(res => res.json())
            .then(items => setItems(items))
    }, [])

    function addItem(newestItem) {
        setItems([...items, newestItem])
    }
    return (
        <>
          <button onClick={() => navigate("/useritempage") }>MY ITEMS</button>
            <Form items={items} setItems={setItems} addItem={addItem} />
            <ItemsContainer items={items}/>

    
            {/* <UserItemPage /> */} 
        </>
    )
}

export default Home; 