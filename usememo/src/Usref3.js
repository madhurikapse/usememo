import React, { useState, useRef } from 'react';

const Usref3 = () => {
  const [count, setCount] = useState(0);
  const eaxmpleref = useRef(0);

  const increment = () => {
    setCount(count + 1);
    eaxmpleref.current += 1;
  };

  const decrement = () => {
    setCount(count - 1);
    eaxmpleref.current -= 1;
  };

  const reset = () => {
    setCount(0);
    eaxmpleref.current = 0;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <div style={{ fontSize: '2em', marginBottom: '20px' }}>
        Count: {count}
      </div>
      <div style={{ fontSize: '1em', marginBottom: '20px' }}>
        Update Count: {eaxmpleref.current}
      </div>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Usref3;
