import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [counter, setCounter] = useState(0);
  const revesecountervalue = useRef();
  console.log(revesecountervalue, "revesecountervalue");

  useEffect(() => {
    console.log(counter, "counter");
    revesecountervalue.current = counter;
  }, [counter]);
  return (
    <div>
      <h1>Previous Counter : {revesecountervalue.current}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseRefComponent;