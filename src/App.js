import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => {
          if (isError) {
            setIsError(false);
          }

          setCount(count + 1);
        }}
      >
        Increment counter
      </button>

      <div
        data-test="error-message"
        className={`error ${isError ? '' : 'hidden'}`}
      >
        The counter can't go below 0!
      </div>

      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setIsError(true);
          }
        }}
      >
        Decrement counter
      </button>
    </div>
  );
};

export default App;
