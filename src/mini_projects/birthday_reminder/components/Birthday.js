import React from 'react';

const Birthday = ({image, name, age}, children) =>  {
  return (
    <>
      <article>
        <img src={image} />
        <h3>{name}</h3>
        <p>{age} años</p>
      </article>
    </>  
  );
}

export default Birthday;