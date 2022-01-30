import React from 'react';


function Item(props) {
  const Data = props.data;
  const item = Data[props.currentItem]
  const name = item.name.first + ' ' + item.name.last
  const location = item.city+', '+item.country
  const jobTitle = item.title
  const employer = item.employer
  return <div className='item'>
      <h2 className='name'>{name} </h2>
      <p><strong>From:</strong> {location}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Employer: </strong>{employer}</p>
      <h3 className='favorites'><strong>Favorite Movies:</strong></h3>
      <ol className='favoritesList'>
      {item.favoriteMovies.map((item, index)=> <li key={index}>{`${index +1}. ${item}`}</li>)}
      </ol>
  </div>;
}

export default Item;
