import React from 'react';

function IndexButton(props) {
  return <h4 onClick={props.changeItem} className='directionNavigation'>{props.direction}</h4>;
}

export default IndexButton;
