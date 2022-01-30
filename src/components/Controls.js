import React from 'react';
import IndexButton from './IndexButton'
import ManageButton from './ManageButton'

function Controls(props) {
  return (
  <div className='controlsContainer'>
      <IndexButton changeItem={()=> props.function.clickHandlerPrevious()} direction='< Previous'/>
      <div>
      <ManageButton onClickHandler={props.deleteItem} action='Edit'/>
      <ManageButton onClickHandler={()=>props.function.deleteHandler()} action='Delete'/>
      <ManageButton onClickHandler={props.deleteItem} action='New'/>
      </div>
      <IndexButton changeItem={()=> props.function.clickHandlerNext()} direction='Next >'/>
  </div>
  )
}

export default Controls;
