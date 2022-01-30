import React from 'react';

function ManageButton(props) {
  return <button onClick={props.onClickHandler} className='manageButton'>{props.action}</button>;
}

export default ManageButton;
