import Form from "./Form"
import React, { useEffect, useState } from 'react'
import ItemsContainer from './ItemsContainer'
import RequestPage from "./RequestPage"
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home({setShowClickedItem, showClickedItem}) {

    let navigate = useNavigate()

    const [items, setItems] = useState([])
    const [searchItem, setSearchItem] = useState("")

    
    useEffect(() => {
        fetch('http://localhost:9292/items')
            .then(res => res.json())
            .then(items => setItems(items))
    }, [])

    function addItem(newestItem) {
        setItems([...items, newestItem])
    }

    function handleSearchInput (e) {
        setSearchItem(e.target.value)
    }
    
    console.log(searchItem)


    const filteredListItem = items.filter(item => {
        return item.item_name.toLowerCase().includes(searchItem.toLowerCase())
    })


    return (
        
        <>
            <button className="button" onClick={() => navigate("/useritempage") }>MY ITEMS</button>
            <input type="text" placeholder="Search for items" onChange={handleSearchInput}></input>
            <ItemsContainer items={filteredListItem} showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem}/>
            <Form items={items} setItems={setItems} addItem={addItem} />

        </>
    )
}

export default Home; 

// const [search, setSearch]= useState("")

// const filteredList = plants.filter(plant => {
//   return plant.name.toLowerCase().includes(search.toLowerCase())
// })