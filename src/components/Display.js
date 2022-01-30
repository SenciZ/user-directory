import React from 'react';
import ItemDisplay from './ItemDisplay';
import Controls from './Controls';
import {useState} from 'react'
import Data from '../ObjectData/data'


function Display() {
    const list = Data
    const [currentItem, setCurrentItem] = useState(0)
    const [data, setData] = useState(list)


    const functions = {
      clickHandlerNext: () => {
        if (currentItem === data.length - 1) {
          return;
        } else {
          setCurrentItem(currentItem + 1);
        }
      },
      clickHandlerPrevious: () => {
        if (currentItem === 0) {
          return;
        } else {
          setCurrentItem(currentItem - 1);
        }
      },

      deleteHandler: () => {
        setData(data.filter((item, index) => index !== currentItem));
      },
    };



  return (
  <div className='mainDisplay'>
      <ItemDisplay data={data} currentItem = {currentItem}/>
      <Controls function={functions}/>
  </div>

  )
}

export default Display;
