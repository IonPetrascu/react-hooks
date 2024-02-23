import React, { memo } from 'react';

const Button = memo(({ onCLick, children }) => {
  return <button onClick={onCLick}>{children}</button>;
});

export default Button;
