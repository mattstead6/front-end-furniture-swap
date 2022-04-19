import ItemsContainer from './ItemsContainer'
import React, { useEffect, useState } from 'react'

function Home() {

const [items, setItems] = useState([])

useEffect(() => {
    fetch('http://localhost:9292/items')
    .then(res => res.json())
    .then(items => setItems(items))
}, [])

    return(
        <div>
            <h1>SWAP'T</h1>
                <ItemsContainer items={items}/>
        </div>

    )
}

export default Home