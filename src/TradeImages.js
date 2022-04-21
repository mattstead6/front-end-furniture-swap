import React, {useState} from "react";
import './TradeImages.css'

function TradeImages({item, setCart}) {

    

    
    function handleClick(){
    
        setCart(item)
 
        
    }

    return (

<>
            <img className="test" src={item.image_url} alt="idk" onClick={handleClick}/>
           
</> 

    )
}

export default TradeImages;