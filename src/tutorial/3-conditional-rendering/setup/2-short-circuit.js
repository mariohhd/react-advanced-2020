import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1>*/}
      {/*if(){console.log('hello world')}*/}
      <h1>{text || 'pepito'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
      {isError ? (
        <p>there ir an error</p>
      )
      : (
        <div>
          <p>all ok</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
