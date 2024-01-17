import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  let color = count > 0 ? "green" : count === 0 ? "grey" : "red";
  // if (count === 0) {
  //   color = "grey";
  // }
  // if (count < 0) {
  //   color = "red";
  // }
  // if (count > 0) {
  //   color = "green";
  // }
  const decrease = () => {
    setcount(count - 1);
  };
  const increase = () => {
    setcount(count + 1);
  };
  const reset = () => {
    setcount(0);
  };
  return (
    <div className="container">
      <h1>Counter </h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button onClick={decrease} className="btn btn-decrease">
          Decrease
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increase} className="btn btn-increase">
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
