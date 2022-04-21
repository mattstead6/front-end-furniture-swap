import React from 'react'
import './Item.css'
import { useNavigate } from "react-router-dom";



function Modal({item, closeModal}) {

    // console.log(item)

    const navigate = useNavigate()

    const {item_name, description, original_pricing, condition, image_url} = item

  

    return (
        <div className='modal'> 
            <div className='modal-content'> 
                <div className='bttndiv'>
                    <button id='bttn' onClick={closeModal}>X</button>
                </div>
                <h2>Item: {item_name}</h2>


                <img src={image_url} alt={`item of ${item_name}`}/>



                    <div className='info-about-item'>
                        <p>Description: {description}</p>
                        <p>Original Price: ${original_pricing}</p>
                        <p>Condition: {condition}/10</p>
                    </div>
                    <button className="tradingButton" onClick={() => navigate("/request") }>REQUEST A TRADE</button>
          </div>
        </div>
    )
}

export default Modal;

