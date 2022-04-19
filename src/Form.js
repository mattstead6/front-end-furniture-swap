import React, {useState} from 'react'

function Form({addItem}){

    const [formState, setFormState] = useState({
        item_name: '',
        description: '',
        original_pricing: 0,
        condition: 0,
        image_url: '',
        user_id: 1
    }) 

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/itemsubmit', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                    item_name: formState.item_name,
                    description: formState.description,
                    original_pricing: formState.original_pricing,
                    condition: formState.condition,
                    image_url: formState.image_url,
            })
        })
        .then(res => res.json())
        .then(newestItem => addItem(newestItem))
    }

function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
}



return (
        <div className='new-item-form'>
            <h2>List New Item</h2>
        <form onSubmit={handleSubmit}>
            <label>Item:
            <input name="item_name" value={formState.item_name} onChange={handleChange}></input>
            </label>
            <label>Description
            <input name="description" value={formState.description} onChange={handleChange}></input>
            </label>
            <label>Original Pricing: 
            <input name="original_pricing" value={formState.original_pricing} onChange={handleChange}></input>
            </label>
            <label>Condition: 
            <input name="condition" value={formState.condition} onChange={handleChange}></input>
            </label>
            <label>Image URL: 
            <input name="image_url" value={formState.image_url} onChange={handleChange}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
        </div>

    )
}

export default Form;



