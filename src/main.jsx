import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        count: state.count + 1,
      };
    }

    case 'decrement': {
      return {
        count: state.count - 1,
      };
    }

    case 'reset': {
      return {
        count: action.payload,
      };
    }

    default:
      {
        return state;
      }
     
  }
};
const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };
  const decrement = () => {
    dispatch({
      type: 'decrement',
    });
  };
  const reset = () => {
    dispatch({
      type: 'reset',
      payload: 0,
    });
  };
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Main;
