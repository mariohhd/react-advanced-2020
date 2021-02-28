import React, { useState } from 'react';

const UseStateBasics = () => {
  const [value, setValue] = useState('random title');
  const handleClick = () => {
    if(value === 'random title')
      setValue('hello world');
    else setValue('random title');
  }
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
