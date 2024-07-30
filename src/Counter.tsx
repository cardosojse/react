import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevState) => prevState - 1);
  }

  function reset() {
    setCount(0);
  }

  function increment() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;
