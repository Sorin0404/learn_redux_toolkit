import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { up, down } from "./reducers/counterSlice";
import { asyncUpFetch } from "./reducers/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(up(2))}>+</button>
      <button onClick={() => dispatch(down(2))}>-</button>
      <button onClick={() => dispatch(asyncUpFetch())}>+ async fetch</button>
      <br />
      <div>
        {count} | {status}
      </div>
    </div>
  );
};

export default Counter;
