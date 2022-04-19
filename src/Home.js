import Form from "./Form"
import React, { useEffect, useState } from 'react'

function Home() {

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
            <Form items={items} setItems={setItems} addItem={addItem} />
            <ItemsContainer items={items}/>
        </>
    )
}

export default Home; 