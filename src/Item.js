import React, { useState } from 'react'
import './Item.css'

function Item({item}) {

  const {item_name, description, original_pricing, condition, image_url} = item

  const [renderImage, setRenderImage] = useState("true")

  function toggleRenderImage() {
    setRenderImage(prev => !prev)
  }

  return (
    <div className="itemCard">
      {renderImage? <img src={image_url} alt={item_name} onClick={toggleRenderImage}/> :
      <>
      <h2>{item_name}</h2>
      <p>{description}</p>
      <p>{condition}</p>
      </>
      }
    </div>
  );
}

export default Item