import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = ({ num }) => {
  const expensiveCalculation = (number) => {
    console.log('calculation running');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  };

  const memofun = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <h2>Result of the calculation: {memofun}</h2>
    </div>
  );
};

const App = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className='a'>
        <h4>useMemo</h4>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
     
      <h1>Current Number: {number}</h1>
      { <ExpensiveCalculationComponent num={number} />}
    </div>
  );
};

export default App;
