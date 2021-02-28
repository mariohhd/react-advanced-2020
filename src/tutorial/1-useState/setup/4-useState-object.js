import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    age: 29,
    name: 'Mario',
    message: 'ola caracola'
  });
  const changeMessage = () => {
    setPerson({...person, message: 'adiós don pepito'});
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button class='btn' onClick={() => changeMessage()}>change message</button>
    </>)
  ;
};

export default UseStateObject;
