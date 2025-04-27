import Button from "../components/buttons/Button2";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE = 'add-value';

function reducer(state,action){

  switch(action.type){
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return{
        ...state,
        count: state.count - 1
      };
    case SET_VALUE_TO_ADD:
      return{
        ...state,
        value: state.value = action.payload
      };
    case ADD_VALUE:
      return{
        count: state.count + state.value,
        value: 0
      }
    default:
      throw new Error("invalid action type: " + action.type)
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer,{
    count: 0,
    value: 0
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  };

  const handleChange = (event) => {
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: Number(event.target.value)
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
    })
  }

  return (
    <Panel className="relative">
      <h1>Count is {state.count}</h1>
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
            value={state.value || ""}
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
