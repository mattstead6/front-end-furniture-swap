import React, { useState } from 'react'
import './Item.css'
import Modal from './Modal'

function Item({item, setShowClickedItem}) {

  const {item_name, description, original_pricing, condition, image_url} = item
  

  const [renderDetails, setRenderDetails] = useState(false)



  function displayDetails () {
    setShowClickedItem(item)
  }
  

  return (
   
    <div className="itemCard">
      <img src={image_url} alt={`item of ${item_name}`} onClick={displayDetails}/>
  
    {!renderDetails ? null : 
   <Modal item={item} setRenderDetails={setRenderDetails}/>
    }

      </div> 
  );
}

export default Item