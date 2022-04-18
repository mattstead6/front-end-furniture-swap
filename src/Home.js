import ItemsContainer from './ItemsContainer'
import React, { useEffect, useState } from 'react'

function Home() {

const [items, setItems] = useState([])

useEffect(() => {
    fetch('http://localhost:9292/items')
    .then(res => res.json())
    .then(items => console.log(items))
}, [])
    return(
<>
<ItemsContainer/>
</>
    )

}

export default Home