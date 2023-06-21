import React, { useState } from "react";
import keyboard from '../media/keyboard-rus.png';


function KeyboardOption() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="flex justify-center" onClick={toggleMenu}>
        KEYBOARD
      </button>
      {isMenuOpen && (
        <div className="text-white flex justify-center">
          <img className="" src={keyboard} alt='Кнопка статистики'/>
        </div>
      )}
    </div>
  );
  
}

export default KeyboardOption;