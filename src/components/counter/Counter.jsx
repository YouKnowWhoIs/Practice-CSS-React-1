import "../../style/counter/Counter.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleButtonPlus = () => {
    setCounter(counter + 1);
  };

  const handleButtoтMinus = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  return (
    <div className="counterItems">
      <p className="counterTest">Звичайний лічильник, не меньше 0</p>
      <div className="counterContainer">
        <button type="button" onClick={handleButtonPlus}>
          +
        </button>
        <p>{counter}</p>
        <button type="button" onClick={handleButtoтMinus}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
