import React from 'react';
import Item from './Item';

function ItemDisplay(props) {
  return <div className='itemDisplay'><Item data={props.data} currentItem = {props.currentItem} /><span><strong>{props.currentItem+1}/{props.data.length}</strong></span></div>;
}

export default ItemDisplay;
