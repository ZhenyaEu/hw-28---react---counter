import { useState } from "react";
import Button from "./Button";

const App = () => {
console.log(useState);
  const [count, setCount] = useState(0);


  const incrementValue = () => {
    setCount(count + 1);
  }

  const decrementValue = () => {
    setCount(count - 1);
  }

  return (
    <div>
    <div>{count}</div>
    <div>
    <Button text="Increment" onClick={incrementValue} />
    </div>
    <div>
    <Button text="Derement" onClick={decrementValue} />
    </div>
    </div>
  )
}

export default App;
