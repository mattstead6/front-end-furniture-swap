import React from 'react';
import Item from './Item';
import './ItemsContainer.css'

function ItemsContainer({items}) {
  // console.log(items)

  return (
    <div >
      <div className="itemContainer"> {items.map(item => {
        return <Item 
          key={item.id}
          item_name={item.item_name}
          description={item.description}
          original_pricing={item.original_pricing}
          condition={item.condition}
          item={item}
        
        />
      })}</div>
    </div>
  )
}

export default ItemsContainer