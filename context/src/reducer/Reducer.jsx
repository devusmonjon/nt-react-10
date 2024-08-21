import React, { useReducer } from "react";
import { initialValue, reducer } from "./reducerVals";

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ul>
      <li>
        Count: {state.count} =&gt;{" "}
        <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
      </li>
    </ul>
  );
};

export default Reducer;
