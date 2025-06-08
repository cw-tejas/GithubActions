import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="app">
      <Header title="React Counter App!" />
      <div className="counter-container">
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button onClick={decrement} className="btn btn-decrement">
            -
          </button>
          <button onClick={reset} className="btn btn-reset">
            Reset
          </button>
          <button onClick={increment} className="btn btn-increment">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
