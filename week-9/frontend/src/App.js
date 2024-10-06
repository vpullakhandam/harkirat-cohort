// import React from "react";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function onClickButton() {
//     setCount(count + 1);
//   }
//   return <button onClick={onClickButton}>counter {count}</button>;
// }

// export default App;

// NOTES
// count++ tries to modify count, which is immutable.
//  count + 1 computes the new value based on the current value of count

// Day 2 week-9!!

import React, { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(0); // Reset the counter to 0
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

export default App;
