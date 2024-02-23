import React, { useCallback, useState } from 'react';
import Button from './Button';
const Main = () => {
  const [visible, setVisibility] = useState(false);

  const handleClick = useCallback(() => {
    setVisibility((currentValue) => !currentValue);
  }, [setVisibility]);

  return (
    <div>
      <h1>What is React?</h1>
      <Button onCLick={handleClick}>Toggle</Button>
      {visible && <div>A JavaScript library for building user interfaces</div>}
    </div>
  );
};

export default Main;
