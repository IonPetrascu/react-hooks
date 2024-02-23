import React, { useState } from 'react';

const Main = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState((сurrentValue) => !сurrentValue);

  }
    return (
      <div>
        <h1>What is React ?</h1>
        <button onClick={handleClick}>{state ? 'Hidden' : 'Show'}</button>
        {state && <div>A JavaScript library</div>}
      </div>
    );
  }

export default Main;
