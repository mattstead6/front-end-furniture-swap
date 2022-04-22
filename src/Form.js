import React, {useState} from 'react'
import './Form.css'

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
        <>
         <h2 className="newItemTitle">Add New Item You Want to Swap</h2>
         <div className='new-item-form'>
        <form onSubmit={handleSubmit}>
            <div>
            <label className="label">Item:
                <div>
                <input className="input-Box" name="item_name" value={formState.item_name} onChange={handleChange}></input>   
                </div>
            </label>
            </div>


            <div>
            <label className="label">Description
                <div>
                <input className="input-Box" name="description" value={formState.description} onChange={handleChange}></input>
                </div>
            </label>
            </div>

        <div>
        <label className="label">Original Pricing: 
                <div>
                <input className="input-Box" name="original_pricing" value={formState.original_pricing} onChange={handleChange}></input>
        </div>
        </label>
        </div>


        <div>       
        <label className="label">Condition: 
            <div>
            <input className="input-Box" name="condition" value={formState.condition} onChange={handleChange}></input>
            </div>
        </label>
        </div>

        <div>
        <label className="label">Image URL: 
            <div>
                <input className="input-Box" name="image_url" value={formState.image_url} onChange={handleChange}></input>
            </div>
        </label>
        </div>

        <div>
            <input className="submitButton" type="submit" value="Submit"></input>
        </div>

        </form>
        </div> 
        </>
        

    )
}

export default Form;



