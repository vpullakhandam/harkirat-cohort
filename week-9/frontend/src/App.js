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

import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(count);
  }

  return <button onClick={incrementCounter}>Increment Counter {count}</button>;
  return <button onClick={decrementCounter}>Decrement Counter</button>;
  return <button onClick={resetCounter}>Reset Counter</button>;
}

export default App;
