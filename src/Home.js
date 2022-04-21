import React, { useEffect, useState } from 'react'
import ItemsContainer from './ItemsContainer'
import './Home.css'
import { useNavigate } from "react-router-dom";

function Home({setShowClickedItem, showClickedItem, items}) {

    let navigate = useNavigate()


    const [searchItem, setSearchItem] = useState("")

    

    function handleSearchInput (e) {
        setSearchItem(e.target.value)
    }
    
    console.log(searchItem)


    const filteredListItem = items.filter(item => {
        return item.item_name.toLowerCase().includes(searchItem.toLowerCase())
    })


    return (
        
        <>
            <div className="buttonContainer">
            <button className="myItemsButton" onClick={() => navigate("/useritempage") }>MY ITEMS</button>
            </div>
            
            <div className="inputContainer">
            <input className="inputBox"type="text" placeholder="Search for items" onChange={handleSearchInput}></input>
            </div>

            <ItemsContainer items={filteredListItem} showClickedItem={showClickedItem} setShowClickedItem={setShowClickedItem}/>
           

        </>
    )
}

export default Home; 

// const [search, setSearch]= useState("")

// const filteredList = plants.filter(plant => {
//   return plant.name.toLowerCase().includes(search.toLowerCase())
// })