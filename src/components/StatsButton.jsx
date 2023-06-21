import React, { useState } from "react";
import butrpgstats from '../media/button-rpg-stats.png';
import butrpgfocusstats from '../media/button-rpg-focus-stats.png';
import butrpgpushstats from '../media/button-rpg-push-stats.png';

//<img className="hidden" src={butrpgfocusstats} alt='Кнопка статистики при наведении' />
//<img className="hidden" src={butrpgpushstats} alt='Кнопка статистики при нажатии' />

function StatsButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="flex justify-center" onClick={toggleMenu}>
        <img className="" src={butrpgstats} alt='Кнопка статистики'/>
         
      </button>
      {isMenuOpen && (
        <div className="text-white flex flex-col justify-start items-start">
          <button className="text-white bg-green-300">- Новичек</button>
          <button name='newSandBoxGame' className="bg-green-400">- Опытный (new sand box game)</button>
        </div>
      )}
    </div>
  );
  
}

export default StatsButton;