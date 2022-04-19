import React from 'react'
import './Item.css'


function Modal({item, closeModal}) {


    const {item_name, description, original_pricing, condition, image_url} = item

  

    return (
        <div className='modal'> 
        <div className='modal-content'> 
         <h2>Item: {item_name}</h2>
          <img src={image_url} alt={`item of ${item_name}`}/>
          <p>Description: {description}</p>
          <p>Original Price: {original_pricing}</p>
          <p>Condition: {condition}/10</p>
            <button onClick={closeModal}>X</button>
          </div>
          </div>
    )
}

export default Modal;

