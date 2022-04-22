import React, {useState} from "react";
import './TradeImages.css'

function TradeImages({item, setCart}) {
    function handleClick(){
    
        setCart(item)
        
    }

    return (

<>
    <div className="imageCardContainer">
    <img className="test" src={item.image_url} alt="idk" onClick={handleClick}/>
    </div> 
</> 

    )
}

export default TradeImages;