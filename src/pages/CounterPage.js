import Button from "../components/buttons/Button2";
import { useState } from "react";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [value, setValue] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount((prev) => prev + value);
    setValue(0);
  }

  return (
    <Panel className="relative">
      <h1>Count is {count}</h1>
      <Button className="rounded-lg" success onClick={increment}>
        Increment
      </Button>
      <Button
        className="absolute top-9 left-30 rounded-lg"
        danger
        onClick={decrement}
      >
        Decrement
      </Button>

      <form onSubmit={() => handleSubmit(event)}>
        <label htmlFor="add-a-lot">
          <input

            className="p-1 mt-3 mb-3 bg-gray-100 rounded-lg border"
            id="add-a-lot"
            type="number"
            onChange={() => handleChange(event)}
            value={value || ""}
          ></input>
        </label>
        <Button className="rounded-lg" primary outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
