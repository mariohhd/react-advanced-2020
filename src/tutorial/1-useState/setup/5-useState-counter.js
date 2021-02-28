import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);
  const complexIncrease = () => {
    setTimeout( () => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000)
  }
  return (<>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={decrease}>decrease</button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={increase}>increase</button>  
    </section>
    <section style={{ margin: '4rem 0' }}>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>increase later</button>  
    </section> 
  </>);
};

export default UseStateCounter;
