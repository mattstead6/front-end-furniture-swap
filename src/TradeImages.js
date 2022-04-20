import React from "react";
import './TradeImages.css'

function TradeImages({item}) {


    function handleClick(){
        console.log('fo')
    }

    return (


            <img className="test" src={item.image_url} alt="idk" onClick={handleClick}/>
    

    )
}

export default TradeImages;