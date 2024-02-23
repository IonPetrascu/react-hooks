import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import './style.css';

const Component = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme);
  return (
    <div>
      <div className={`container container-${theme ? 'light' : 'dark'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia numquam ex adipisci
        quasi vitae natus, quidem porro commodi quo. Quo maiores illo totam, eaque consequuntur
        minus in et cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi.
        Suscipit necessitatibus eaque maxime deleniti officiis, doloremque omnis sequi quisquam ab
        quia magnam consectetur enim provident, officia itaque numquam dolores? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Laudantium quia numquam ex adipisci quasi vitae
        natus, quidem porro commodi quo. Quo maiores illo totam, eaque consequuntur minus in et cum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi. Suscipit
        necessitatibus eaque maxime deleniti officiis, doloremque omnis sequi quisquam ab quia
        magnam consectetur enim provident, officia itaque numquam dolores? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Laudantium quia numquam ex adipisci quasi vitae natus,
        quidem porro commodi quo. Quo maiores illo totam, eaque consequuntur minus in et cum. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi. Suscipit necessitatibus
        eaque maxime deleniti officiis, doloremque omnis sequi quisquam ab quia magnam consectetur
        enim provident, officia itaque numquam dolores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium quia numquam ex adipisci quasi vitae natus, quidem porro
        commodi quo. Quo maiores illo totam, eaque consequuntur minus in et cum. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Rem, sequi. Suscipit necessitatibus eaque maxime
        deleniti officiis, doloremque omnis sequi quisquam ab quia magnam consectetur enim
        provident, officia itaque numquam dolores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium quia numquam ex adipisci quasi vitae natus, quidem porro
        commodi quo. Quo maiores illo totam, eaque consequuntur minus in et cum. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Rem, sequi. Suscipit necessitatibus eaque maxime
        deleniti officiis, doloremque omnis sequi quisquam ab quia magnam consectetur enim
        provident, officia itaque numquam dolores?
      </div>
    </div>
  );
};

export default Component;
