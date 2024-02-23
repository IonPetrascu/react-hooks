import React, { useEffect, useState } from 'react';

const Interval = ({ speedInterval }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, speedInterval);

    return () => clearInterval(interval);
  }, [speedInterval]);

  return <div>{count}</div>;
};

const Main = () => {
  const [speedInterval, setSpeedInterval] = useState();

  const handleClickInterval = (speed) => {
    setSpeedInterval(speed);
  };

  return (
    <div>
      <Interval speedInterval={speedInterval} />
      <button onClick={() => handleClickInterval(100)}>100ms</button>
      <button onClick={() => handleClickInterval(500)}>500ms</button>
      <button onClick={() => handleClickInterval(1000)}>1s</button>
    </div>
  );
};

export default Main;
