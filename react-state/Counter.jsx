import { useState } from "react";

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  function handleToggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="counter">
      <p>You have {count} clicked </p>
      <button onclick={handleIncreaseCount}>Click me</button>
      <button onclick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}

// const [state, setState] = useState(initialState)
