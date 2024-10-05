import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount(count + 1);
  }
  return <button onClick={onClickButton}>counter {count}</button>;
}

export default App;

// NOTES
// count++ tries to modify count, which is immutable.
//  count + 1 computes the new value based on the current value of count
