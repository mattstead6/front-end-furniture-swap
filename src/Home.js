import Form from "./Form"
import React, { useEffect, useState } from 'react'
import ItemsContainer from './ItemsContainer'
import Header from './Header'
import RequestPage from "./RequestPage"
// import {
//     Routes,
//     Route,
//   } from "react-router-dom";
// import UserItemPage from "./UserItemPage";
import { useNavigate } from "react-router-dom";
import UserItemPage from "./UserItemPage"



function Home() {

    const navigate = useNavigate()

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
            

            <Header />
            <ItemsContainer items={items}/>
            <Form items={items} setItems={setItems} addItem={addItem} />
            <RequestPage />
            <UserItemPage />


            <button onClick={()=> navigate("/useritempage")}>SHOW MY ITEMS</button>


        </>
    )
}


export default Home; 
