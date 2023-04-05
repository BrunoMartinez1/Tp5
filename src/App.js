import React, { useState } from 'react';
import './App.css';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <center>
      <h1>Contador: {count}</h1><hr className='new1'></hr>
      <button className='button button1' onClick={increment}>Sumar</button>
      <button className='button button1' onClick={decrement}>Restar</button>
      </center>
    </div>
  );
}

export default Counter;
