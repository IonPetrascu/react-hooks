import React, { useState } from 'react';
import { ThemeContext } from './themeContext';
import Component from './Component';

const Main = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prev => prev ? false : true);
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Component />
      <button onClick={toggleTheme}>Change theme</button>
    </ThemeContext.Provider>
  );
};

export default Main;
