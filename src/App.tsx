import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  getLatestNews,
} from "./redux/actions/actionCreatot";
import { InitialStateType } from "./redux/reducers/counterReducer";
import { RootState } from "./redux/store";

const App = () => {
  const counter = useSelector<RootState, number | undefined>(
    (state) => state.counter?.count
  );
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleNews}>Get Latest News</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default App;
