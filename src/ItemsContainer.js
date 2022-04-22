import React, {useState, useEffect } from 'react';
import Item from './Item';
import './ItemsContainer.css'
import Modal from './Modal';

function ItemsContainer({items, setShowClickedItem, showClickedItem,}) {
 
  // const [showClickedItem, setShowClickedItem] = useState({})

  function closeModal() {
    setShowClickedItem({})
  }

  useEffect( () => {
    closeModal()
  },[])

  // console.log(showClickedItem)

  return (
    <div >
      <div className="itemContainer"> {items.map(item => {
        return <Item 
          key={item.id}
          item={item}
          setShowClickedItem={setShowClickedItem}
        />
        
      })}</div>
      
      { 
      showClickedItem.id? <Modal closeModal={closeModal} item={showClickedItem}/>
      : null
      }
      
    </div>
  )
}

export default ItemsContainer


// create div with fixed positioning that will always be there
// control state   
// z index means sit on top of other stuff
// position fixed means wherever i am i want it fixed to center