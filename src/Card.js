import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, description, id, key } = props;

  return (
    <div className='card'>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <p>🗑</p>
    </div>
  )
}

export default Card;
